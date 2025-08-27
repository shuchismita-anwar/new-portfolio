"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Award,
  Briefcase,
  Github,
  Linkedin,
  Globe,
  BookOpen,
  Code,
  Copy,
  Check,
} from "lucide-react"
import { useState } from "react"
import RImg from "@/components/RImg"

export default function AcademicPortfolio() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(4)
  const email = "shuchismita.anwar@gmail.com"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const allProjects = [
    {
      title: "Object Detection with YOLO and EfficientNet",
      content:
        "Built an end-to-end object detection system on Pascal VOC 2012, combining EfficientNet with a YOLO-style architecture. Implemented custom data preprocessing, augmentation, and loss functions, with optimized training and evaluation on COCO images. The framework outputs accurate bounding boxes and class predictions with visualization support.",
      github: "https://github.com/shuchismita-anwar/YOLO-object-detection",
    },
    {
      title: "ResNet50 U-Net–Style Semantic Segmentation",
      content:
        "Deep learning framework using graph neural networks to predict drug-target interactions. Features web interface for researchers to query potential drug candidates.",
      github: "https://github.com/shuchismita-anwar/Image-Segmentation/tree/main",
    },
    {
      title: "Emotion Recognition: CNNs, Transfer Learning & Vision Transformers",
      content:
        "Built an end-to-end emotion detection system (angry/happy/sad) with TensorFlow/Keras, spanning custom LeNet/ResNet34, EfficientNet/MobileNetV2 transfer learning, and Vision Transformers (custom ViT + HuggingFace ViT). The pipeline includes tf.data loaders, on-the-fly augmentation (RandomFlip/Rotation/Contrast, optional CutMix), W&B experiment tracking, and explainability via feature-map visualizations and Grad-CAM. Models were exported to ONNX and TFLite, with quantization and pruning for speed/size gains, plus TFRecords for scalable I/O and a simple model ensemble for higher accuracy. The result is a reproducible classification stack with training, evaluation, and deployment benchmarks.",
      github: "https://github.com/shuchismita-anwar/emotion-detection/tree/master",
    },
    {
      title: "Lightweight CNN with Quantum-Augmentation Experiments on PneumoniaMNIST",
      content:
        "Built a class-balanced PneumoniaMNIST classifier using PyTorch with on-the-fly oversampling, a compact CNN (~21k params), and rigorous evaluation (ROC, PR, confusion matrix). Training for 30 epochs reaches 94–95% validation accuracy and 85.4% test accuracy with precision 0.84, recall 0.95, and F1 0.89. The codebase also prototypes a differentiable Qiskit circuit layer (parameter-shift gradients) integrated via a custom autograd.Function, explored as a plug-in feature extractor alongside the classical pipeline.",
      github:
        "https://github.com/shuchismita-anwar/Hybrid-quantum-classical-Neural-Networks-with-PyTorch-and-Qiskit/tree/master",
    },
    {
      title: "Interactive 8-Ball Pool Game with OpenGL in Python",
      content:
        "Mini-game built with PyOpenGL/GLUT and Tkinter: a 2D billiards table with six pockets, an aimable cue, and smooth ball animation. Implements midpoint circle/line rasterization to draw the table and ball, mouse-driven cue angle/strength visualization, and keyboard selection of target pockets (1–6). Includes basic physics cues (spin-like rotation while rolling) and a lightweight Tkinter launcher, showcasing real-time rendering, input handling, and procedural drawing without external assets.",
      github: "https://github.com/shuchismita-anwar/8-Ball-Pool/tree/master",
    },
    {
      title: "Stroke Prediction using Machine Learning",
      content:
        "Developed an end-to-end stroke prediction pipeline on structured healthcare data. The workflow included data cleaning, handling missing values, categorical encoding, feature scaling, and SMOTENC oversampling to address class imbalance. Multiple machine learning models were trained and compared, including Logistic Regression, KNN, Decision Trees, SVMs, Neural Networks, and Random Forests. Model performance was evaluated with accuracy, precision, recall, F1-score, confusion matrices, and visualization plots.",
      github: "https://github.com/shuchismita-anwar/Heart-Stroke-Prediction/tree/master",
    },
  ]

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 4, allProjects.length))
  }

  const currentProjects = allProjects.slice(0, visibleProjects)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-serif text-primary">{"Shuchismita Anwar"}</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#publications" className="text-muted-foreground hover:text-accent transition-colors">
                {"Publications"}
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-accent transition-colors">
                Experience
              </a>
              <a href="#education" className="text-muted-foreground hover:text-accent transition-colors">
                Education
              </a>
              <a href="#awards" className="text-muted-foreground hover:text-accent transition-colors">
                Awards
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Name, description, and links */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold font-serif text-primary">{"Shuchismita Anwar"}</h1>
                <p className="text-xl text-muted-foreground">
                  Researcher in Artificial Intelligence, Machine Learning, and Quantum Machine Learning{" "}
                </p>
                <p className="text-lg text-secondary leading-relaxed">
                  Advancing intelligent systems at the intersection of quantum machine learning, medical imaging, and
                  multimodal AI through rigorous research and development.
                </p>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span><a href="https://www.bracu.ac.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors cursor-pointer flex items-center gap-1">Brac University</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <button
                    onClick={copyEmail}
                    className="hover:text-accent transition-colors cursor-pointer flex items-center gap-1"
                    title="Click to copy email"
                  >
                    <span>{email}</span>
                    {copiedEmail ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 opacity-50" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://scholar.google.com/citations?user=zIvEZFAAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    Google Scholar
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/shuchismita-anwar-034759218/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/shuchismita-anwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    Website
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-accent/20">
                <RImg
                  src="/academic-portrait.png"
                  alt="Shuchismita Anwar - Professional Portrait"
                  width={320}
                  height={320}
                  sizes="(max-width: 768px) 256px, 320px"
                  // priority={true}
                  quality={95}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">About</h2>
            <Separator className="w-24 mx-auto" />
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a researcher in artificial intelligence with a strong background in machine learning, deep
                  learning, and quantum computing. My work explores how computational models can be made more efficient,
                  interpretable, and impactful, with applications ranging from multimodal learning to medical data
                  analysis.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently, I serve as a Graduate Research Assistant at BRAC University, contributing to projects on quantum-classical hybrid models, medical imaging, multimodal report generation, and lightweight neural architectures. These experiences have allowed me to work across theory and application, strengthening both my technical expertise and my research vision.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>I am preparing to pursue a Ph.D. in artificial intelligence and machine learning, with the goal of advancing methods that are both theoretically grounded and practically meaningful.</strong>
                </p>
                {/*<div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Systems Biology</Badge>
                  <Badge variant="secondary">Genomics</Badge>
                  <Badge variant="secondary">Drug Discovery</Badge>
                  <Badge variant="secondary">Single-cell Analysis</Badge>
                </div>*/}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Publications Section */}
        <section id="publications" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">Publications</h2>
            <Separator className="w-24 mx-auto" />
          </div>
          <div className="grid gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-serif">
                      Eyes on the Image: Gaze-Supervised Multimodal Learning for Chest X-ray Diagnosis and Report
                      Generation
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      Tanjim Islam Riju*, <span className="font-bold">Shuchismita Anwar*</span>, Saman Sarker Joy, Farig
                      Sadeque, Swakkhar Shatabda
                    </p>
                    <CardDescription>Submitted to 40th AAAI • 2026</CardDescription>
                    <Badge variant="secondary" className="w-fit">
                      {"Under Review"}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" size="sm" asChild title="View preprint">
                      <a href="https://arxiv.org/pdf/2508.13068" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Preprint Link
                      </a>
                    </Button>
                    {/* <Button variant="ghost" size="sm" asChild title="View published paper">
                      <a href="https://aaai.org/paper-published" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Published Paper
                      </a>
                    </Button>*/}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We propose a two-stage multimodal framework that integrates chest X-ray images, clinical labels,
                  bounding boxes, and radiologist gaze data. A novel gaze-guided contrastive learning model improves
                  disease classification (F1 ↑ 5.7%, AUC ↑ 3.4%), while a region-grounded report generation pipeline
                  produces more accurate and interpretable radiology reports.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge variant="outline" className="text-xs">
                    Multimodal Learning
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Medical Imaging
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Gaze Tracking
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Report Generation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-serif">
                      Hybrid Quantum-Classical Learning for Multiclass Image Classification
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      <span className="font-bold">{"Shuchismita Anwar"}</span>, Sowmitra Das, Muhammad Iqbal Hossain,
                      Jishnu Mahmud
                    </p>
                    <CardDescription>Journal of Quantum Machine Intelligence • 2025</CardDescription>
                    <Badge variant="secondary" className="w-fit">
                      {"Under Review"}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" size="sm" asChild title="View preprint">
                      <a href="https://arxiv.org/pdf/2508.18161" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Preprint Link
                      </a>
                    </Button>
                    {/* <Button variant="ghost" size="sm" asChild title="View published paper">
                      <a href="https://link.springer.com/published-paper" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Published Paper
                      </a>
                    </Button>*/}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This work introduces a hybrid quantum-classical QCNN that reuses qubits discarded during pooling to
                  preserve entanglement information often lost in conventional architectures. By coupling these recycled
                  qubits with classical layers through joint optimization, the model achieves significantly higher
                  accuracy on MNIST, Fashion-MNIST, and OrganAMNIST, while maintaining a lightweight parameter footprint
                  compatible with NISQ hardware.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge variant="outline" className="text-xs">
                    Quantum Computing
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Hybrid Learning
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Image Classification
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    NISQ
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">Projects</h2>
            <Separator className="w-24 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg font-serif flex items-center gap-2">
                        
                        {project.title}
                      </CardTitle>
                      
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {visibleProjects < allProjects.length && (
            <div className="flex justify-center mt-8">
              <Button variant="outline" onClick={loadMoreProjects} className="bg-transparent">
                Load More Projects
              </Button>
            </div>
          )}
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">Experience</h2>
            <Separator className="w-24 mx-auto" />
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Graduate Research Assistant
                    </CardTitle>
                    <CardDescription>BRAC University • 2025 - Present</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Contributing to research in multimodal AI and lightweight neural architectures. Involved in literature
                  reviews, experimental design, publication writing, and guiding undergraduate thesis students.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Student Tuitor (ST/Undergraduate Teaching Assistant)
                    </CardTitle>
                    <CardDescription>Brac University • 2023 - 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mentored students through labs, graded assignments, and provided guidance during office hours,
                  deepening both my subject mastery and my ability to communicate complex concepts clearly.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">Education</h2>
            <Separator className="w-24 mx-auto" />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-accent pl-6 space-y-4">
                <div></div>
                <div></div>
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Science in Computer Science & Engineering</h4>
                  <p className="text-muted-foreground">BRAC University • 2020 - 2024</p>
                  <p className="text-sm text-muted-foreground mt-2">Highest Distinction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Awards Section */}
        <section id="awards" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">Awards & Honors</h2>
            <Separator className="w-24 mx-auto" />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Recognition & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    Highest Distinction
                    <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                      <a
                        href="https://www.bracu.ac.bd/academics/policies-and-procedures/academic-standings-and-honors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </h4>
                  <p className="text-muted-foreground text-sm">BRAC University • 2024</p>
                  <p className="text-muted-foreground text-sm">Awarded to candidates whose CGPA is 3.80 or higher</p>
                </div>
                <div>
                  <h4 className="font-semibold">Dean's List</h4>
                  <p className="text-muted-foreground text-sm">BRAC University</p>
                </div>
                <div>
                  <h4 className="font-semibold">VC's List</h4>
                  <p className="text-muted-foreground text-sm">BRAC University</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">Contact</h2>
            <Separator className="w-24 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyEmail}
                  className="w-full h-auto flex-col gap-2 py-4 cursor-pointer"
                  title="Click to copy email"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Mail className="h-6 w-6 text-accent" />
                      {copiedEmail && <Check className="h-4 w-4 text-green-500" />}
                    </div>
                    <span className="text-sm font-medium">{copiedEmail ? "Email Copied!" : "Email"}</span>
                  </div>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <Button variant="ghost" size="sm" asChild className="w-full h-auto flex-col gap-2 py-4">
                  <a
                    href="https://scholar.google.com/citations?user=zIvEZFAAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <BookOpen className="h-6 w-6 text-accent" />
                    <span className="text-sm font-medium">Google Scholar</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <Button variant="ghost" size="sm" asChild className="w-full h-auto flex-col gap-2 py-4">
                  <a
                    href="https://www.linkedin.com/in/shuchismita-anwar-034759218/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <Linkedin className="h-6 w-6 text-accent" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <Button variant="ghost" size="sm" asChild className="w-full h-auto flex-col gap-2 py-4">
                  <a
                    href="https://github.com/shuchismita-anwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <Github className="h-6 w-6 text-accent" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Interested in collaboration or have questions about my research? I'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/mqakeqgp" method="POST" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your research interests or collaboration ideas..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2025 Shuchismita Anwar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
