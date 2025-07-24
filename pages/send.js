
export default function Send() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Kirim Pesan ke Telegram</h1>
      <form method="POST" action="/api/telegram">
        <input name="message" placeholder="Pesan" required />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
  }
  
