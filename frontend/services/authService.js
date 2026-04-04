export async function registerUser(formData) {
const res = await fetch("http://localhost:8000/api/v1/users/register", {
method: "POST",
body: formData,
});

let data;

try {
data = await res.json();
} catch {
throw new Error("Server error");
}

if (!res.ok) {
throw new Error(data.message || "Something went wrong");
}

return data;
}



export async function loginUser(credentials) {
const res = await fetch("http://localhost:8000/api/v1/users/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
credentials: "include", // 🔥 VERY IMPORTANT FOR COOKIES
body: JSON.stringify(credentials),
});

let data;

try {
data = await res.json();
} catch {
throw new Error("Server error");
}

if (!res.ok) {
throw new Error(data.message || "Something went wrong");
}

return data;
}


export async function getCurrentUser() {
const res = await fetch("http://localhost:8000/api/v1/users/me", {
method: "GET",
credentials: "include", // 🔥 IMPORTANT
});

if (!res.ok) {
throw new Error("Not authenticated");
}

return res.json();
}
