"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Sarah",
        avatar: "S",
        title: "Marketing Specialist",
        description:
            "Absolutely fantastic! This tool has streamlined our marketing processes and made my job much easier.",
    },
    {
        name: "Ryan",
        avatar: "R",
        title: "Data Analyst",
        description:
            "As a data analyst, I rely on accurate and efficient tools. This application exceeded my expectations and has become an integral part of my workflow.",
    },
    {
        name: "Emily",
        avatar: "E",
        title: "Freelance Writer",
        description:
            "I'm a freelance writer, and this app has been a game-changer for brainstorming and organizing my ideas. It's a must-have in my creative toolkit.",
    },
    {
        name: "Alex",
        avatar: "A",
        title: "Project Manager",
        description:
            "Managing projects can be overwhelming, but this application has made it a breeze. It's intuitive, feature-rich, and has significantly increased our team's productivity.",
    },
    {
        name: "Linda",
        avatar: "L",
        title: "Entrepreneur",
        description:
            "As an entrepreneur, time is of the essence. This app has saved me countless hours, allowing me to focus on growing my business. Highly recommended!",
    },
    {
        name: "Daniel",
        avatar: "D",
        title: "UX/UI Designer",
        description:
            "From wireframing to prototyping, this application has become an indispensable tool in my design process. The interface is clean, and the functionality is top-notch.",
    },
    {
        name: "Grace",
        avatar: "G",
        title: "Educator",
        description:
            "I use this app in my classroom to create engaging content for my students. It has made teaching more interactive and enjoyable for both me and my students.",
    },
    {
        name: "Tom",
        avatar: "T",
        title: "Sales Representative",
        description:
            "Closing deals has never been easier. This app has helped me stay organized, track leads, and ultimately boost my sales performance. A game-changer in the world of sales.",
    },
];

const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card
                        key={item.description}
                        className="bg-[#192339] border-none text-white"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0 text-white/80">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LandingContent;
