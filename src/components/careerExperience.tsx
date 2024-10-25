// components/CareerExperience.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { CareerExperienceItem } from "@/data/types"

interface CareerExperienceProps {
    jobs: CareerExperienceItem[]
}

const CareerExperience: React.FC<CareerExperienceProps> = ({ jobs }) => (
    <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                Career & Experience
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
                {jobs.map((job, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                            <div>
                                <h3 className="font-semibold">{job.position}</h3>
                                <p className="text-sm text-gray-500">{job.company} | {job.period}</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-2">{job.description}</p>
                            <h4 className="font-semibold mt-4 mb-2">Tools & Technologies:</h4>
                            <ul className="list-disc list-inside mb-4">
                                {job.tools.map((tool, toolIndex) => (
                                    <li key={toolIndex}>{tool}</li>
                                ))}
                            </ul>
                            <h4 className="font-semibold mt-4 mb-2">Key Responsibilities:</h4>
                            <ul className="list-disc list-inside">
                                {job.responsibilities.map((responsibility, respIndex) => (
                                    <li key={respIndex}>{responsibility}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>
    </Card>
)

export default CareerExperience
