'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectItem } from "@/data/types"
import { useTranslation } from "@/hooks/useTranslation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'

interface ProjectCardProps {
    project: ProjectItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { t } = useTranslation()

    return (
        <Card className="flex flex-col bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex-none">
                <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
                <div className="relative w-full pt-[56.25%] mb-4">
                    <div className="absolute top-0 left-0 w-full h-full rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-sm leading-relaxed">{project.objective}</p>
                    <p className="text-xs text-muted-foreground">{t('project.stackAndTools')}: {project.stackAndTools}</p>
                </div>
            </CardContent>
            <CardFooter className="flex-none mt-auto pt-4">
                <Button className="w-full" variant="outline" asChild>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                    >
                        <Github className="w-4 h-4" />
                        <span>{t('project.viewRepository')}</span>
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}