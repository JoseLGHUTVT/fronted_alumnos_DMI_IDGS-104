import { useState } from "react";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async (
        email: string,
        password: string
    ) => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Correo electrónico o contraseña incorrectos"
                );

                return false;
            }

            return true;

        } catch (err) {
            setError(
                "No se pudo conectar con el servidor"
            );

            return false;

        } finally {
            setLoading(false);
        }
    };

    return {
        login,
        loading,
        error,
    };
};