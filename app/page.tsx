"use client"
import Link from "next/link"
import { MapPin, Phone, Mail, Briefcase, Linkedin, Globe, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        <Card className="border-none shadow-lg">
          <CardHeader className="text-center relative pb-0">
            {/* <div className="absolute right-4 top-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-primary hover:bg-primary/90 text-white hover:text-white border-none"
                onClick={() => {
                  // Create vCard data - same as the download function
                  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jyotinarayan Kar
N:Kar;Jyotinarayan;;;
ORG:Jindal Shadeed Iron & Steel LLC
TITLE:Assistant Manager
TEL;TYPE=WORK,VOICE:+96892441638
TEL;TYPE=WORK,VOICE:1266
EMAIL;TYPE=WORK,INTERNET:jyotinarayan.kar@jindalshadeed.com
URL:https://jindalshadeed.com
URL:https://om.linkedin.com/in/jyotinarayankar
ADR;TYPE=WORK:;;Jindal Shadeed Iron & Steel LLC;Sohar;Al Batinah;0000;Oman
END:VCARD`

                  // Create a data URI
                  const dataUri = "data:text/vcard;charset=utf-8," + encodeURIComponent(vcard)

                  // Open the URI which will prompt to add contact on mobile devices
                  window.open(dataUri)
                }}
              >
                <span className="text-xs font-medium">Add Contact</span>
              </Button>
            </div> */}
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                <AvatarImage src="/profile.jpg" alt="Jyotinarayan Kar" />
                <AvatarFallback className="text-2xl">JK</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl font-bold">Jyotinarayan Kar</CardTitle>
            <CardDescription className="text-primary font-medium mt-1">Assistant Manager</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Work</p>
                  <Link href="tel:+96892441638" className="text-sm font-medium hover:text-primary">
                    +968 92441638
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">CUG</p>
                  <Link href="tel:1266" className="text-sm font-medium hover:text-primary">
                    1266
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Work</p>
                  <Link
                    href="mailto:jyotinarayan.kar@jindalshadeed.com"
                    className="text-sm font-medium hover:text-primary break-all"
                  >
                    jyotinarayan.kar@jindalshadeed.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Oman</span>
                    <Link
                      href="https://maps.google.com/?q=Oman"
                      target="_blank"
                      className="text-xs text-primary hover:underline"
                    >
                      Show on Map
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Company</p>
                  <p className="text-sm font-medium">Jindal Shadeed Iron & Steel LLC</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-semibold mb-2">About Me</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jyotinarayan Kar is a skilled professional specializing in AI, machine learning, and digital
                transformation. With a B.Tech in Metallurgical & Materials Engineering from NIT Rourkela, Jyotinarayan
                focuses on implementing AI-powered solutions for process efficiency and automation at Jindal Shadeed
                Iron and Steel (Oman).
              </p>
              {/* <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                His experience includes data analysis, predictive modelling, and business intelligence, helping
                organizations harness AI and digital tools to streamline operations. His technical acumen,
                problem-solving skills, and passion for leveraging AI and automation for business transformation make
                him a valuable asset in the evolving landscape of digital technology.
              </p> */}
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-semibold mb-3">Find me on</h3>
              <div className="grid grid-cols-3 gap-3">
                <Link
                  href="https://om.linkedin.com/in/jyotinarayankar"
                  target="_blank"
                  className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-[#0077B5] mb-1" />
                  <span className="text-xs">LinkedIn</span>
                </Link>

                <Link
                  href="https://wa.me/+96892441638"
                  target="_blank"
                  className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <MessageSquare className="h-6 w-6 text-[#25D366] mb-1" />
                  <span className="text-xs">WhatsApp</span>
                </Link>

                <Link
                  href="https://jindalshadeed.com"
                  target="_blank"
                  className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Globe className="h-6 w-6 text-primary mb-1" />
                  <span className="text-xs">Website</span>
                </Link>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center pt-0 pb-6">
            <Button
              className="w-full max-w-xs"
              onClick={() => {
                // Create vCard data
                const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jyotinarayan Kar
N:Kar;Jyotinarayan;;;
ORG:Jindal Shadeed Iron & Steel LLC
TITLE:Assistant Manager
TEL;TYPE=WORK,VOICE:+96892441638
TEL;TYPE=WORK,VOICE:1266
EMAIL;TYPE=WORK,INTERNET:jyotinarayan.kar@jindalshadeed.com
URL:https://jindalshadeed.com
URL:https://om.linkedin.com/in/jyotinarayankar
ADR;TYPE=WORK:;;Jindal Shadeed Iron & Steel LLC;Sohar;Al Batinah;0000;Oman
END:VCARD`

                // Create a blob and download
                const blob = new Blob([vcard], { type: "text/vcard" })
                const url = URL.createObjectURL(blob)
                const link = document.createElement("a")
                link.href = url
                link.download = "jyotinarayan-kar.vcf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              Download vCard
            </Button>
          </CardFooter>
        </Card>

        <div className="text-center mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jyotinarayan Kar. All rights reserved.
        </div>
      </div>
    </div>
  )
}

