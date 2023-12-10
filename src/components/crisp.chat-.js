"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("2489011e-c815-4897-988c-71d5954b3b99");
    }, []);

    return null;
};
