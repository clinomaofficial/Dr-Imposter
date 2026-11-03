from pathlib import Path
p=Path('firestore.rules')
s=p.read_text(encoding='utf-8')
a=s.index('      allow update: if isSignedIn() && live()')
b=s.index('      allow delete:',a)
s=s[:a]+'''      function stable() {
        return request.resource.data.hostId == resource.data.hostId &&
          request.resource.data.maxPlayers == resource.data.maxPlayers &&
          request.resource.data.createdAt == resource.data.createdAt &&
          request.resource.data.expiresAt == resource.data.expiresAt &&
          request.resource.data.isPublic == resource.data.isPublic;
      }
      function memberUpdate() {
        return member() && live() && stable() &&
          request.resource.data.memberIds == resource.data.memberIds;
      }
      // Separate rules keep each permission check below the expression budget.
      allow update: if isSignedIn() && live() && stable() && validRoster() && joining();
      allow update: if isSignedIn() && live() && stable() && validRoster() && leaving();
      allow update: if memberUpdate() && request.auth.uid == resource.data.hostId && validRoster() &&
        request.resource.data.status in ['LOBBY', 'PLAYING', 'PLAYING_DISCUSSION', 'VOTING', 'REVEALED', 'GUESSING', 'SCOREBOARD', 'TWO_PLAYERS_GUESS'] &&
        (request.resource.data.status != 'LOBBY' || (request.resource.data.secretWord == null && request.resource.data.imposterAssignedWord == null));
      allow update: if memberUpdate() && voting();
      allow update: if memberUpdate() && duelGuess();
      allow update: if memberUpdate() && inquiryMove();
      allow update: if memberUpdate() && cycleMove();
      allow update: if memberUpdate() && resource.data.status == 'GUESSING' &&
        request.resource.data.status == 'SCOREBOARD' && isImposter() &&
        changed().hasOnly(['players', 'imposterGuessedWordId', 'status']);
'''+s[b:]
with p.open('r+',encoding='utf-8') as f: f.write(s); f.truncate()
