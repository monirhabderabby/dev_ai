import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
    ArrowRight,
    Code,
    Image,
    MessageSquare,
    Music,
    Video,
} from "lucide-react";

const tools = [
    {
        lebel: "Conversation",
        Icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation",
    },
    {
        lebel: "Music Generation",
        Icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music",
    },
    {
        lebel: "Image Generation",
        Icon: Image,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image",
    },
    {
        lebel: "Video Generation",
        Icon: Video,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: "/video",
    },
    {
        lebel: "Code Generation",
        Icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/code",
    },
];

const DashboardPage = () => {
    return (
        <div>
            <div className="mb-8 space-y-4 ">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore the power of AI
                </h2>
                <p className="text-muted-foreground text-center font-light text-sm md:text-lg">
                    Chat with the smartest of AI - Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools?.map(({ href, lebel, Icon, color, bgColor }) => (
                    <Card
                        key={href}
                        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={cn("p-2 w-fit rounded-md", bgColor)}
                            >
                                <Icon className={cn("w-8 h-8", color)} />
                            </div>
                            <div className="font-semibold">{lebel}</div>
                        </div>

                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
