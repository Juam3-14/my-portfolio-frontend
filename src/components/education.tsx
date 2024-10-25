// components/Education.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { EducationItem } from "@/data/types"

interface EducationProps {
    education: EducationItem[]
}

const Education: React.FC<EducationProps> = ({ education }) => (
    <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Education
            </CardTitle>
        </CardHeader>
        <CardContent>
            {education.map((edu, index) => (
                <div key={index} className="mb-4">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-gray-500">{edu.institution}, {edu.year}</p>
                </div>
            ))}
        </CardContent>
    </Card>
)

export default Education
