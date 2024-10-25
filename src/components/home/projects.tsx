import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


const Projects: React.FC = () => {
    return (
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Project One</CardTitle>
                        <CardDescription>A brief description of the project</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src="/resources/cualcito_200x300.jpeg"
                            alt="Project One"
                            className="w-full h-48 object-cover rounded-md"
                            width={300}
                            height={200}
                        />
                        <Button className="mt-4 w-full" variant="outline" asChild>
                            <Link href="#">View Project</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Project Two</CardTitle>
                        <CardDescription>A brief description of the project</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src="/resources/cualcito_200x300.jpeg"
                            alt="Project Two"
                            className="w-full h-48 object-cover rounded-md"
                            width={300}
                            height={200}
                        />
                        <Button className="mt-4 w-full" variant="outline" asChild>
                            <Link href="#">View Project</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Project Three</CardTitle>
                        <CardDescription>A brief description of the project</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src="/resources/cualcito_200x300.jpeg"
                            alt="Project Three"
                            className="w-full h-48 object-cover rounded-md"
                            width={300}
                            height={200}
                        />
                        <Button className="mt-4 w-full" variant="outline" asChild>
                            <Link href="#">View Project</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Project Four</CardTitle>
                        <CardDescription>A brief description of the project</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src="/resources/cualcito_200x300.jpeg"
                            alt="Project Three"
                            className="w-full h-48 object-cover rounded-md"
                            width={300}
                            height={200}
                        />
                        <Button className="mt-4 w-full" variant="outline" asChild>
                            <Link href="#">View Project</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Project Five</CardTitle>
                        <CardDescription>A brief description of the project</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src="/resources/cualcito_200x300.jpeg"
                            alt="Project Three"
                            className="w-full h-48 object-cover rounded-md"
                            width={300}
                            height={200}
                        />
                        <Button className="mt-4 w-full" variant="outline" asChild>
                            <Link href="#">View Project</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Project Six</CardTitle>
                        <CardDescription>A brief description of the project</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src="/resources/cualcito_200x300.jpeg"
                            alt="Project Three"
                            className="w-full h-48 object-cover rounded-md"
                            width={300}
                            height={200}
                        />
                        <Button className="mt-4 w-full" variant="outline" asChild>
                            <Link href="#">View Project</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Projects;
