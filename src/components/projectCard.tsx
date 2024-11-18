'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectItem } from "@/data/types"
import { useTranslation } from "@/hooks/useTranslation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProjectCardProps {
    project: ProjectItem
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { t } = useTranslation()

    return (
        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    {project.name}
                </CardTitle>
                <CardDescription>
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-md"
                    width={300}
                    height={200}
                />
                <p className="mt-4">{project.objective}</p>
                <p className="mt-2">{project.stackAndTools}</p>
                <Button className="mt-4 w-full" variant="outline" asChild>
                    <Link href="#">View Project</Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export default ProjectCard