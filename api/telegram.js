
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message || "Pesan kosong";
    const chatId = "7602599621";
    const token = "7932437630:AAHD7Bq8OG3noqzpS1vYMpv8cin59HVRbxI";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const data = await response.json();
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
      }
    
