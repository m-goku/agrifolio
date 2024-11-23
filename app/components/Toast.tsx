"use client";
import React, { useEffect, useState } from "react";

// Define the type for the toast props
type ToastProps = {
    message: string; // The message to display in the toast
    type?: "success" | "error" | "info" | "warning"; // Type of the toast with default
    duration?: number; // Duration the toast is visible (in ms)
    onClose?: () => void; // Callback when the toast closes
};

const Toast: React.FC<ToastProps> = ({
    message,
    type = "success",
    duration = 3000,
    onClose,
}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            onClose && onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!show) return null;

    const typeStyles: Record<typeof type, string> = {
        success: "bg-green-100 text-green-800 border-green-300",
        error: "bg-red-100 text-red-800 border-red-300",
        info: "bg-blue-100 text-blue-800 border-blue-300",
        warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    };

    return (
        <div
            className={`fixed top-5 right-5 z-50 px-4 py-2 rounded border shadow-lg transition-opacity ${typeStyles[type]
                }`}
        >
            <p className="text-sm font-medium">{message}</p>
        </div>
    );
};

export default Toast;
