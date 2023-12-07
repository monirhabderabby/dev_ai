"use client";
// packages
import {
    Check,
    Code,
    Image,
    MessageSquare,
    Music,
    Video,
    Zap,
} from "lucide-react";

// components
import { useProModal } from "@/hooks/use-pro-modal";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";

const tools = [
    {
        label: "Conversation",
        Icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Music Generation",
        Icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        label: "Image Generation",
        Icon: Image,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
    },
    {
        label: "Video Generation",
        Icon: Video,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
    },
    {
        label: "Code Generation",
        Icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
    },
];

const ProModal = () => {
    const proModal = useProModal();

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to Dev.Ai
                            <Badge
                                variant={"premium"}
                                className={"uppercase text-sm py-1"}
                            >
                                pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        {tools.map((tool) => (
                            <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div
                                        className={cn(
                                            "p-2 w-fit rounded-md",
                                            tool.bgColor
                                        )}
                                    >
                                        <tool.Icon
                                            className={cn(
                                                "w-6 h-6",
                                                tool.color
                                            )}
                                        />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button size="lg" variant="premium" className="w-full">
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ProModal;
