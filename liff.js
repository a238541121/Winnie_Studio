document.addEventListener("DOMContentLoaded", async function () {
    await liff.init({ liffId: "2007108431-rGGOW6R0" });

    if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        const userId = profile.userId;

        document.getElementById("userInfo").innerText = `你的 LINE ID: ${userId}`;

        // 把 userId 送到 GAS
        fetch("https://script.google.com/macros/s/AKfycbzaRn4gOEGKKLC0DSlOSYFZlJvnKZgFpUUVVZdwVNKDko39Mf-eryhmjHNOs8NxbchKCQ/exec", {
            method: "POST",
            body: JSON.stringify({ lineId: userId }),
            headers: { "Content-Type": "application/json" }
        });
    } else {
        liff.login();
    }
});
