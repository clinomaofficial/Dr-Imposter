import React from "react";

interface Props {
  children: React.ReactNode;
  language: "Arabic" | "English";
  onRetry: () => void;
  onHome: () => void;
}

interface State {
  failed: boolean;
}

export class GameLoadBoundary extends React.Component<Props, State> {
  declare props: Props;
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;

    const isArabic = this.props.language === "Arabic";
    const message = isArabic
      ? "تعذر تحميل اللعبة، حاول مرة أخرى"
      : "Could not load the game. Please try again.";

    return (
      <div style={{
        background: "#111",
        color: "#fff",
        padding: 24,
        textAlign: "center",
        fontFamily: "system-ui",
        borderRadius: 8,
      }} role="alert">
        <p style={{ marginBottom: 16 }}>{message}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <button
            type="button"
            onClick={this.props.onRetry}
            style={{
              padding: "12px 24px",
              fontSize: 16,
              cursor: "pointer",
              background: "#fff",
              color: "#111",
              border: "none",
              borderRadius: 4,
              minWidth: 48,
              minHeight: "48px",
            }}
          >
            {isArabic ? "إعادة المحاولة" : "Retry"}
          </button>
          <button
            type="button"
            onClick={this.props.onHome}
            style={{
              padding: "12px 24px",
              fontSize: 16,
              cursor: "pointer",
              background: "#333",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              minWidth: 48,
              minHeight: "48px",
            }}
          >
            {isArabic ? "الرئيسية" : "Home"}
          </button>
        </div>
      </div>
    );
  }
}
