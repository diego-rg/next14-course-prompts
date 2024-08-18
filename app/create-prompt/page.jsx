"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";

export default function CreatePrompt() {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    });

    const createPrompt = async (e) => {
        //evitar recarga ao enviar a form
        e.preventDefault();
        setSubmitting(true);
        try {

        } catch (error) {

        }
    };

    return (
        <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt} />
    );
}