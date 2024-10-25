"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { SkillCardProps } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion"


interface SkillCardsProps {
    skills: SkillCardProps[];
    title: string;
    subtitle: string
}

export default function SkillCards({ skills, title, subtitle }: SkillCardsProps) {
    const [expandedSkill, setExpandedSkill] = useState<string | null>(null)

    const handleToggle = (name: string) => {
        setExpandedSkill(expandedSkill === name ? null : name)
    }

    const sortedSkills = [...skills].sort((a, b) => {
        if (a.name === expandedSkill) return -1
        if (b.name === expandedSkill) return 1
        return 0
    })

    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">{title}</h2>
            <h3 className="text-lg font-semibold tracking-tight sm:text-2xl text-center mb-6">{subtitle}</h3>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                layout
            >
                <AnimatePresence>
                    {sortedSkills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className={expandedSkill === skill.name ? "col-span-full" : ""}
                        >
                            <Card
                                className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer h-full"
                                onClick={() => handleToggle(skill.name)}
                            >
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold">{skill.name}</h3>
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: expandedSkill === skill.name ? "auto" : 0,
                                            opacity: expandedSkill === skill.name ? 1 : 0
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}