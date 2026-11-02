import { medicalWords } from '../src/data/medicalWords';

const obgynCandidates = [
  'Preeclampsia', 'Eclampsia', 'Ectopic Pregnancy', 'Placenta Previa', 'Placental Abruption',
  'Endometriosis', 'Polycystic Ovary Syndrome', 'Uterine Leiomyoma', 'Cervical Cancer',
  'Pap Smear', 'Gestational Diabetes', 'Premature Rupture of Membranes', 'Shoulder Dystocia',
  'Placenta Accreta', 'Postpartum Hemorrhage', 'Molar Pregnancy', 'Cesarean Section',
  'Cardiotocography', 'Amniocentesis', 'Fallopian Tube', 'Amniotic Fluid', 'Cervix',
  'Endometrium', 'Ovarian Cyst', 'Episiotomy', 'Hyperemesis Gravidarum', 'Uterine Atony'
];

for (const t of obgynCandidates) {
  const match = medicalWords.find(w => 
    w.word.English.toLowerCase().includes(t.toLowerCase()) || 
    (w.synonyms && w.synonyms.some(s => s.toLowerCase().includes(t.toLowerCase())))
  );
  if (match) {
    console.log('EXISTS:', t, '->', match.id, match.word.English);
  } else {
    console.log('CLEAR (NEW):', t);
  }
}
