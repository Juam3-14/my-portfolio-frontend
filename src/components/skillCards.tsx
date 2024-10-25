"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { SkillCardProps } from "@/data/types"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'

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

    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">{title}</h2>
            <h3 className="text-lg font-semibold tracking-tight sm:text-2xl text-center mb-6">{subtitle}</h3>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                layout
            >
                <AnimatePresence>
                    {skills.map((skill) => (
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
                                className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer h-full relative"
                                onClick={() => handleToggle(skill.name)}
                            >
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold">{skill.name}</h3>
                                        <div className="flex items-center">
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">{skill.level}%</span>
                                            <ChevronDown
                                                className={`transition-transform duration-300 ${expandedSkill === skill.name ? 'rotate-180' : ''
                                                    }`}
                                                size={20}
                                            />
                                        </div>
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
                                    <div className="absolute bottom-2 right-2 sm:hidden">
                                        <span className="text-xs text-gray-500 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 px-2 py-1 rounded-full">
                                            More...
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}