import { useState } from "react";
import { Button } from "../components/button";
//import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Phone, Mail, Target, Eye } from "lucide-react";
import '../styles/components.scss';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1518623001395-125242310d0c",
      title: "Manufacturing",
      description: "Customized manufacturing solutions."
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      title: "Construction",
      description: "Innovative construction solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold text-orange-500">IndustryFlow®</div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-orange-500">Home</a>
            <a href="#" className="text-muted-foreground">About Us</a>
            <a href="#" className="text-muted-foreground">Services</a>
            <a href="#" className="text-muted-foreground">Pages</a>
            <a href="#" className="text-muted-foreground">Projects</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Phone size={16} />
            <span>+1 (555) 123-4567</span>
            <Mail size={16} />
            <span>info@industryflow.com</span>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600">Get Your Free Quote</Button>
        </div>
      </header>

      <div className="relative">
        <div className="h-[500px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518623001395-125242310d0c"
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Innovative Manufacturing & Construction Solutions
                </h1>
                <p className="text-lg mb-8">
                  We provide high-quality manufacturing, construction, and industrial services tailored to your business needs. With years of expertise, we deliver innovative solutions ensuring efficiency, safety, and sustainability.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Get Your Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-3 gap-8 text-center mb-16">
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground">Awards</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1K+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10+</h3>
              <p className="text-muted-foreground">Years of Expertise</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                alt="Workers"
                className="rounded-lg"
              />
            </div>
            <div>
              <span className="text-orange-500">Core Values</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Trusted Global Partner For Manufacturing And Construction
              </h2>
              <p className="text-muted-foreground mb-6">
                With a wealth of experience and a strong commitment to excellence, we have consistently built a reputation as a trusted partner for businesses worldwide.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Get Your Free Quote
              </Button>

              <div className="grid grid-cols-2 gap-8 mt-12">
                {/* <Card className="p-6">
                  <Target className="text-orange-500 mb-4" size={24} />
                  <h3 className="font-bold mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To deliver excellence with high-quality services for sustainable growth
                  </p>
                </Card>
                <Card className="p-6">
                  <Eye className="text-orange-500 mb-4" size={24} />
                  <h3 className="font-bold mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To lead innovation with new standards
                  </p>
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}