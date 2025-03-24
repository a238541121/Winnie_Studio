document.addEventListener("DOMContentLoaded", async function () {
    await liff.init({ liffId: "你的_LIFF_ID" });

    if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        const userId = profile.userId;

        document.getElementById("userInfo").innerText = `你的 LINE ID: ${userId}`;

        // 把 userId 送到 GAS
        fetch("https://script.google.com/macros/s/你的_GAS_ID/exec", {
            method: "POST",
            body: JSON.stringify({ lineId: userId }),
            headers: { "Content-Type": "application/json" }
        });
    } else {
        liff.login();
    }
});
