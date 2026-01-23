import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Footer } from './Footer';
import Navbar from './Navbar';
import dfsImage from '../assets/images/dfs.png';
import dhtMlImage from '../assets/images/dht_ml.png';
import distributedMlImage from '../assets/images/dist_ml.png';
import utopiaImage from '../assets/images/utopia.png';
import textSummarizationImage from '../assets/images/text_summarization.png';
import softwareRequirementImage from '../assets/images/agile.jpeg';
import fiveGImage from '../assets/images/5g.png';
import mininetImage from '../assets/images/mininet.png';
import blrImage from '../assets/images/blr.png';
import proteinEngineeringImage from '../assets/images/protein_engineering.png';
import lunarLanderImage from '../assets/images/lunar_lander.png';
import ppoLossImage from '../assets/images/ppo_loss.png';
import plantCareTrackerImage from '../assets/images/plant_care_tracker.png';
import travelogue1Image from '../assets/images/travelogue-1.png';
import travelogue2Image from '../assets/images/travelogue-2.png';
import todoAppImage from '../assets/images/todo-app.png';

import './ProjectPages.css';

// Bayesian Linear Regression Project Page
export function BayesianLinearRegressionPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Bayesian Linear Regression</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={blrImage} 
                alt="Bayesian Linear Regression Implementation" 
                className="project-page-main-image blr-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                This project implements a comprehensive Bayesian Linear Regression framework with conjugate Gaussian priors and likelihood functions. 
                The implementation focuses on quantifying parameter and prediction uncertainty through posterior and predictive distributions, 
                providing a probabilistic approach to linear regression that goes beyond traditional frequentist methods.
              </p>
              <p>
                The core implementation defines a Gaussian prior over model weights and assumes Gaussian observation noise, 
                enabling the derivation of closed-form posterior distributions over weights and predictive distributions for new data points. 
                This approach provides uncertainty quantification that is crucial for decision-making in real-world applications, 
                particularly in scenarios where understanding prediction confidence is as important as the predictions themselves.
              </p>
              <p>
                The project includes comprehensive visualization of posterior samples, predictive means, and uncertainty bands, 
                allowing for intuitive understanding of model behavior. A detailed comparison with Ordinary Least Squares (OLS) regression 
                highlights the advantages of the Bayesian approach, particularly in uncertainty quantification and model interpretability.
              </p>
              <p>
                As a practical application, the notebook applies Bayesian Linear Regression to predict concrete compressive strength 
                from mixture composition features. This real-world problem demonstrates the framework's capabilities in materials science, 
                where understanding prediction uncertainty is crucial for engineering decisions. The implementation includes Bayesian optimization 
                concepts to identify optimal mixture compositions for future experiments, showcasing the framework's utility in experimental design.
              </p>
              <p>
                The project leverages the concrete strength dataset with 8 input features (Cement, Fly Ash, Slag, Water, HRWR, Fine Aggregate, 
                Curing Temperature, Time) and implements Expected Improvement (EI) acquisition functions for Bayesian optimization. 
                This demonstrates how Bayesian methods can guide experimental design by balancing exploration and exploitation in the search space.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Jupyter Notebooks</span>
              <span className="project-page-tech-badge">NumPy</span>
              <span className="project-page-tech-badge">SciPy</span>
              <span className="project-page-tech-badge">Matplotlib</span>
              <span className="project-page-tech-badge">Seaborn</span>
              <span className="project-page-tech-badge">Bayesian Statistics</span>
              <span className="project-page-tech-badge">Machine Learning</span>
              <span className="project-page-tech-badge">Uncertainty Quantification</span>
              <span className="project-page-tech-badge">Predictive Distributions</span>
              <span className="project-page-tech-badge">Conjugate Priors</span>
              <span className="project-page-tech-badge">Bayesian Optimization</span>
              <span className="project-page-tech-badge">Expected Improvement</span>
              <span className="project-page-tech-badge">Materials Science</span>
              <span className="project-page-tech-badge">Experimental Design</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/advanced-machine-learning/tree/main" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Neural Network Protein Engineering Project Page
export function NeuralNetworkProteinEngineeringPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Neural Network Protein Engineering</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={proteinEngineeringImage} 
                alt="Neural Network Protein Engineering" 
                className="project-page-main-image protein-engineering-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                This project builds neural network models to predict how active a protein will be based on its amino acid sequence. 
                Using deep learning, the neural network learns patterns in protein sequences to classify them into different activity levels, 
                from non-functional to highly active variants. The goal is to help scientists identify promising protein designs before 
                conducting expensive laboratory experiments.
              </p>
              <p>
                The neural network architecture uses transformer blocks with multi-head attention mechanisms. I implemented the core 
                components from scratch, including manual backpropagation through the attention layers to deeply understand how gradients 
                flow through the network. The model processes protein sequences through embedding layers, learns positional relationships, 
                and uses multiple transformer layers to extract meaningful features before making predictions.
              </p>
              <p>
                The project uses real experimental data from protein engineering research, where nuclease enzymes were tested for their 
                ability to break down biofilms. The neural network is trained on thousands of protein variants and their measured activities, 
                learning to recognize which sequence patterns lead to high activity. This approach accelerates protein discovery by predicting 
                promising candidates before they're synthesized in the lab.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">PyTorch</span>
              <span className="project-page-tech-badge">Transformers</span>
              <span className="project-page-tech-badge">Machine Learning</span>
              <span className="project-page-tech-badge">Deep Learning</span>
              <span className="project-page-tech-badge">Protein Engineering</span>
              <span className="project-page-tech-badge">Sequence Classification</span>
              <span className="project-page-tech-badge">Multi-Head Attention</span>
              <span className="project-page-tech-badge">Jupyter Notebooks</span>
              <span className="project-page-tech-badge">NumPy</span>
              <span className="project-page-tech-badge">Pandas</span>
              <span className="project-page-tech-badge">Matplotlib</span>
              <span className="project-page-tech-badge">Seaborn</span>
              <span className="project-page-tech-badge">Scikit-learn</span>
              <span className="project-page-tech-badge">WandB</span>
              <span className="project-page-tech-badge">Bioinformatics</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/advanced-machine-learning/tree/main/Neural_Network_Protein_Engineering" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Distributed File System Project Page
export function ProjectPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Distributed File System</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={dfsImage} 
                alt="Distributed File System Architecture" 
                className="project-page-main-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
              Developed a scalable and fault-tolerant distributed file system that enables seamless file sharing among multiple clients using the Gifford quorum-based consistency protocol. 
              Each replica server functions as both a local file store and an RPC endpoint, implemented using Apache Thrift for cross-node communication. The system supports tunable quorum parameters (NR for reads, NW for writes), ensuring that NR + NW &gt; N to guarantee strong consistency through quorum intersection.
              </p>
              <p>
              The coordinator node manages concurrency using a thread-safe FIFO queue to serialize client operations, preventing race conditions and maintaining strict version ordering. 
              Each file is chunked into 500B segments for efficient network transfer, and every replica maintains persistent version metadata for all local files. The system supports real-time collaboration and has been validated across 17 functional and performance test cases involving .txt, .csv, and .png files.
              </p>
              <p>
              Clients can connect to any replica, and requests are internally routed to the coordinator as needed. The system supports both read-heavy and write-heavy workloads by dynamically tuning quorum parameters. 
              Under concurrent load with 7 replicas and 4 clients, the system consistently maintained data integrity and demonstrated robust performance, including queue-based coordination, fast reads, and resilient writes.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Distributed Systems</span>
              <span className="project-page-tech-badge">Gifford Algorithm</span>
              <span className="project-page-tech-badge">File Systems</span>
              <span className="project-page-tech-badge">Socket Programming</span>
              <span className="project-page-tech-badge">Network Communication</span>
              <span className="project-page-tech-badge">Apache Thrift</span>
              <span className="project-page-tech-badge">Quorum-based Consistency</span>
              <span className="project-page-tech-badge">Fault Tolerance</span>
              <span className="project-page-tech-badge">Multithreading</span>
              <span className="project-page-tech-badge">Consistency</span>
              <span className="project-page-tech-badge">Client-Server Architecture</span>
              <span className="project-page-tech-badge">Concurrency Control</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/distributed-file-system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// DHT Federated ML System Project Page
export function DHTFederatedMLPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">DHT Federated ML System</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={dhtMlImage} 
                alt="DHT Federated ML System Architecture" 
                className="project-page-main-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
              Developed a distributed machine learning training system based on a Chord-inspired DHT (Distributed Hash Table) architecture. 
              The system features a central Supernode responsible for managing node membership and assigning unique identifiers using SHA1 hashing over a 6-bit address space. 
              Compute nodes join dynamically and construct their own finger tables for efficient file routing and network traversal. The Supernode ensures consistent and conflict-free network formation by coordinating node joins and maintaining global node metadata.
              </p>
              <p>
              Each Compute Node is capable of receiving training files, determining responsibility via consistent hashing, and performing localized training using gradient-based machine learning. 
              Once training completes, the node caches the resulting model and exposes it through a Thrift RPC interface. The client distributes training data, collects trained gradients from responsible nodes, and performs federated aggregation to construct a global model. 
              Routing logic is enforced through finger tables and successor-predecessor relationships, ensuring scalability and efficient file delivery across the ring.
              </p>
              <p>
              This system was validated across a suite of test cases involving node join logic, finger table accuracy, model training across nodes, and hash-based file routing. 
              The architecture supports fault-tolerant, distributed learning while simulating real-world federated training setups with seamless model collection, convergence validation, and decentralized coordination.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Federated MachineLearning</span>
              <span className="project-page-tech-badge">Multilayer Perceptron</span>
              <span className="project-page-tech-badge">Distributed Hash Table</span>
              <span className="project-page-tech-badge">Chord Protocol</span>
              <span className="project-page-tech-badge">P2P Networks</span>
              <span className="project-page-tech-badge">RPC</span>
              <span className="project-page-tech-badge">Apache Thrift</span>
              <span className="project-page-tech-badge">SHA1 Hashing</span>
              <span className="project-page-tech-badge">Socket Programming</span>

            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/dht-federated-ml-system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Distributed ML System Project Page
export function DistributedMLPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Distributed ML System</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={distributedMlImage} 
                alt="Distributed ML System Architecture" 
                className="project-page-main-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
              In this project, we set out to build a distributed training system for neural networks that could mimic real-world computing environments—where machines aren’t always reliable, and workloads must be shared intelligently.
               Using Python and Apache Thrift, we created a three-part system: a client to kick off the training, a coordinator to manage the process, and multiple compute nodes to do the heavy lifting.
              </p>
              <p>
              When training begins, the coordinator reads the data and splits it into tasks, placing them in a queue. It then assigns those tasks to compute nodes using a smart scheduling strategy—round-robin or load balancing, depending on the situation. 
              If one node is overloaded and rejects a task, the system doesn’t fail. Instead, the coordinator forwards that task to the next available node, ensuring that no task is ever dropped. 
              Each compute node trains an MLP model, computes gradients, and sends them back to the coordinator. These gradients are then averaged to update the global model. The process repeats over several rounds, improving the model each time.
              </p>
              <p>
              We tested the system under different configurations—varying node counts, random vs. load-aware scheduling, and even simulated failures. 
              Despite rejections and retries, the system consistently achieved robust model convergence, with final validation errors as low as 0.27, proving the strength of our load-balancing logic and distributed design. 
              The system supports dynamic node addition and removal, and can scale to handle large-scale ML workloads with varying compute resources.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Apache Thrift</span>
              <span className="project-page-tech-badge">Multi-Layer Perceptron</span>
              <span className="project-page-tech-badge">Multithreading</span>
              <span className="project-page-tech-badge">Load Balancing</span>
              <span className="project-page-tech-badge">Fault Tolerance</span>
              <span className="project-page-tech-badge">Socket Programming</span>
              <span className="project-page-tech-badge">Gradient Aggregation</span>
              <span className="project-page-tech-badge">Model Validation</span>
              <span className="project-page-tech-badge">Distributed Systems Design</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/distributed-ml-system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Utopia Kafka Project Page
export function UtopiaKafkaPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Utopia - Real-Time Analytics Pipeline</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
              <div className="project-page-image-container">
               <img 
                 src={utopiaImage} 
                 alt="Utopia Kafka System Architecture" 
                 className="project-page-main-image utopia-image"
               />
             </div>
            <br/>
            <div className="project-page-description-text">
              <p>
              In this project, we joined Utopia, a fast-growing music startup aiming to revolutionize its platform with real-time analytics. 
              Initially built on PostgreSQL, Utopia needed a shift toward event-driven architecture to power features like artist trends, concert alerts, and personalized recommendations. 
              We were brought in to assess the right streaming infrastructure and design a scalable, low-latency data pipeline to serve millions of music fans.
              </p>
              <p>
              We began with a technical evaluation, comparing Apache Kafka with other messaging systems like RedPanda and RabbitMQ, and delivered a live working demo that produced and consumed events locally. 
              After choosing Kafka as our backbone, we moved to the design phase, identifying key business questions such as detecting top streamed artists, sold-out concerts, and high-capacity event alerts. 
              We mapped these to stream processing topologies, detailing data sources, transformation logic, stateful joins, and sinks.
              </p>
              <p>
              The core of the project was the Stream Processing POC, where we used Kafka Streams to implement fully working pipelines for each business insight. 
              With test cases and a simulated data-demo environment, we validated the system end-to-end. Finally, we extended the project by ingesting enriched streaming outputs into Apache Pinot, enabling fast OLAP queries and dashboards. 
              The system now supports both real-time triggers and historical analytics—bridging streaming and batch insights into a unified platform.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Java</span> 
              <span className="project-page-tech-badge">Apache Kafka</span>
              <span className="project-page-tech-badge">Kafka Streams</span>
              <span className="project-page-tech-badge">Apache Pinot</span>
              <span className="project-page-tech-badge">RabbitMQ</span>
              <span className="project-page-tech-badge">Event-Driven Architecture</span>
              <span className="project-page-tech-badge">Stream Topology Design</span>
              <span className="project-page-tech-badge">Stateful Processing</span>
              <span className="project-page-tech-badge">Real-Time Analytics</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/utopia-kafka-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Text Summarization Project Page
export function TextSummarizationPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Text Summarization Analysis</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
                         <div className="project-page-image-container">
               <img 
                 src={textSummarizationImage} 
                 alt="Text Summarization Analysis" 
                 className="project-page-main-image text-summarization-image"
               />
             </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                In an age where digital information is abundant but attention is limited, I set out with my teammate to explore the capabilities of modern NLP models in condensing information without losing meaning. 
                Our goal was to evaluate how different summarization techniques — abstractive and extractive — perform across real-world datasets of varying length and complexity.
                We chose three prominent algorithms: T5, representing deep abstractive generation, BERT, optimized for contextual extractive summarization, and TextRank, a graph-based baseline method.
              </p>
              <p>
                I led the BERT pipeline implementation, fine-tuning it for both medium-length summarization and headline generation. 
                I also curated and pre-processed datasets from Indian Express and CNN/DailyMail, ensuring variety across input lengths and formats.
                Throughout, I co-authored and analyzed model outputs using ROUGE and BLEU metrics, diving into both their quantitative performance and qualitative fluency.
              </p>
              <p>
                Our findings revealed fascinating trade-offs: BERT excelled at concise content extraction but struggled with ultra-short outputs like headlines. 
                T5 shined in fluency and abstraction, especially for long-form inputs. Meanwhile, TextRank offered computational efficiency but limited linguistic richness.
              </p>
              <p>
                The project deepened my practical experience in transformer architectures, evaluation metric interpretation, and benchmarking real-world AI applications — all while sharpening my technical communication and research writing skills.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Transformers</span>
              <span className="project-page-tech-badge">Natural Language Processing</span>
              <span className="project-page-tech-badge">Artificial Intelligence</span>
              <span className="project-page-tech-badge">T5</span>
              <span className="project-page-tech-badge">BERT</span>
              <span className="project-page-tech-badge">TextRank</span>
              <span className="project-page-tech-badge">ROUGE</span>
              <span className="project-page-tech-badge">BLEU</span>
              <span className="project-page-tech-badge">Pandas</span>
              <span className="project-page-tech-badge">NumPy</span>
              <span className="project-page-tech-badge">Jupyter Notebooks</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/text-summarization" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Software Requirement Specification Project Page
export function SoftwareRequirementPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Software Requirement Specification</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={softwareRequirementImage} 
                alt="Software Requirement Specification" 
                className="project-page-main-image software-requirement-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                Over a semester-long software engineering capstone, our team built SPORTS, a modular sports league scheduling system designed for city Parks & Recreation departments. 
                The project followed a full software development lifecycle, from requirements elicitation to implementation and testing, grounded in Agile methodologies.
              </p>
              <p>
                We began with detailed requirements analysis, using checklists to evaluate for consistency, testability, and feasibility. 
                These insights were translated into structured documents including EARS-based system specifications, UML class diagrams for structural design, and sequence diagrams for core usage flows like team registration and scheduling.
              </p>
              <p>
                The second half focused on object-oriented design and implementation. We created a comprehensive design document capturing architecture, system interfaces, and detailed traceability mappings to requirements. 
                Following Agile practices, we managed the project using SCRUM ceremonies—sprint planning, daily standups, sprint review, and retrospective—while maintaining a live product and sprint backlog.
              </p>
              <p>
                In our final sprint, we implemented and tested Version 0.1, which supports balanced, fair team scheduling across venues and time slots, even under constraints like odd team counts or late sign-ups. 
                The system was unit tested, documented, and validated via an end-to-end demonstration simulating real-world league scheduling.
              </p>
              <p>
                This project emphasized not just coding, but collaborative engineering, traceability, and iterative delivery—skills critical in real-world software development.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Pytest</span>
              <span className="project-page-tech-badge">FastAPI</span>
              <span className="project-page-tech-badge">UML</span>
              <span className="project-page-tech-badge">EARS</span>
              <span className="project-page-tech-badge">Agile</span>
              <span className="project-page-tech-badge">SCRUM</span>
              <span className="project-page-tech-badge">Object-Oriented Design</span>
              <span className="project-page-tech-badge">Sequence Diagrams</span>
              <span className="project-page-tech-badge">Class Diagrams</span>
              <span className="project-page-tech-badge">Software Engineering</span>
              <span className="project-page-tech-badge">Requirements Specification</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/software-requirement-specification" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// 5G Network Field Test Evaluation Project Page
export function FiveGNetworkPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">5G Network Field Test Evaluation</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
                         <div className="project-page-image-container">
               <img 
                 src={fiveGImage} 
                 alt="5G Network Performance Analysis" 
                 className="project-page-main-image fiveg-image"
               />
             </div>
            <br/>
              <div className="project-page-description-text">
              <p>
                Tasked with evaluating real-world 5G network performance under varying conditions, the team set out to analyze latency, throughput, and streaming quality across multiple network configurations. 
                The project lead took ownership of infrastructure setup and data engineering throughout all three phases of the project.
              </p>
              <p>
                In Phase 1, an AWS EC2 instance was provisioned and configured as the backend server, Apache was implemented, and HTTP and ICMP protocols were enabled through security groups. 
                Extensive connectivity tests were run using ping, traceroute, and iperf, both in direct and reverse modes, while automated log parsers were scripted to extract key metrics like mean, standard deviation, and packet loss from raw outputs.
              </p>
              <p>
                In Phase 2, large file downloads via HTTP were analyzed using Wireshark, dissecting packet flows, identifying TCP retransmissions, and quantifying gzip compression gains. 
                The impact of file size on response latency was evaluated and protocol behavior across multiple layers was highlighted.
              </p>
              <p>
                In Phase 3, Video-on-Demand tests were conducted across four ABR algorithms (Bola, Dynamic, Fixed, Throughput), both in stationary and mobile conditions. 
                Python notebooks were built to calculate average bitrate, stall counts, and buffer stability, generating comparative visualizations.
              </p>
              <p>
                The outcome was a comprehensive, field-tested evaluation of 5G, demonstrating Dynamic ABR as the most reliable under mobility—with zero stalls and superior adaptive behavior.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">5G</span>
              <span className="project-page-tech-badge">Apache HTTP Server</span>
              <span className="project-page-tech-badge">Ping</span>
              <span className="project-page-tech-badge">Traceroute</span>
              <span className="project-page-tech-badge">Iperf</span>
              <span className="project-page-tech-badge">Wireshark</span>
              <span className="project-page-tech-badge">Adaptive Bitrate</span>
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Pandas</span>
              <span className="project-page-tech-badge">NumPy</span>
              <span className="project-page-tech-badge">AWS</span>
              <span className="project-page-tech-badge">Computer Networks</span>
              <span className="project-page-tech-badge">Network Analysis</span>
              <span className="project-page-tech-badge">Field Testing</span>
              <span className="project-page-tech-badge">Data Analytics</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/5G-network-field-test-evaluation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Mininet SDN Implementation Project Page
export function MininetSDNPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Mininet SDN Implementation</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={mininetImage} 
                alt="Mininet SDN Implementation" 
                className="project-page-main-image mininet-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                As part of an advanced networking project, I designed and implemented a software-defined network (SDN) using Mininet, a POX controller, and Open vSwitch. The goal was to simulate a real-world enterprise-like topology and gain hands-on experience with network behavior at both Layer 2 and Layer 3. I engineered the network with multiple hosts, Layer 2 switches for frame forwarding, and Layer 3 routers to handle inter-subnet routing.
              </p>
              <p>
                I began by building diverse topologies and tuning link parameters to study their impact on latency and bandwidth. Using tools like ping, iperf, and Wireshark, I benchmarked traffic flow, observed congestion points, and analyzed routing decisions. I ensured that the Layer 3 routers handled gateway-level responsibilities, while Layer 2 switches enabled efficient broadcast domain segmentation.
              </p>
              <p>
                The core of the project involved writing a custom Python-based POX controller that could intelligently manage traffic. I implemented dynamic ARP resolution, ICMP echo handling, and automatic FlowMod rule generation to offload the controller after initial learning. This minimized packet-in messages and improved scalability. By the end, I had built a fully functional SDN that achieved stable, high-throughput communication and demonstrated robust, rule-based routing across the simulated network.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Mininet</span>
              <span className="project-page-tech-badge">Open vSwitch</span>
              <span className="project-page-tech-badge">POX Controller</span>
              <span className="project-page-tech-badge">Wireshark</span>
              <span className="project-page-tech-badge">Iperf</span>
              <span className="project-page-tech-badge">Ping</span>
              <span className="project-page-tech-badge">ARP</span>
              <span className="project-page-tech-badge">ICMP</span>
              <span className="project-page-tech-badge">IP</span>
              <span className="project-page-tech-badge">TCP/UDP</span>
              <span className="project-page-tech-badge">Ubuntu VM</span>
              <span className="project-page-tech-badge">OpenFlow 1.3</span>
              <span className="project-page-tech-badge">SDN</span>
              <span className="project-page-tech-badge">Computer Networks</span>
              <span className="project-page-tech-badge">Network Emulation</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/Mininet-SDN-Implementation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Reinforcement Learning Lunar Lander Project Page
export function ReinforcementLearningLunarLanderPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Reinforcement Learning - Lunar Lander</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-images-side-by-side">
              <div className="project-page-image-container">
                <img 
                  src={lunarLanderImage} 
                  alt="Lunar Lander PPO Training" 
                  className="project-page-main-image lunar-lander-image"
                />
              </div>
              <div className="project-page-image-container">
                <img 
                  src={ppoLossImage} 
                  alt="PPO Loss Curves" 
                  className="project-page-main-image ppo-loss-image"
                />
              </div>
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                This project implements Proximal Policy Optimization (PPO) from scratch to train an agent to land a spacecraft safely 
                on a landing pad in the Lunar Lander 2D environment. The implementation features a complete actor-critic architecture 
                with separate networks for policy (actor) and value function (critic), using Generalized Advantage Estimation (GAE) 
                for stable advantage computation.
              </p>
              <p>
                The PPO algorithm is implemented with all core components: rollout collection, GAE computation, clipped surrogate objective, 
                and value function learning. The actor network outputs action probabilities over the action space, while the critic network 
                estimates the value function V(s). The implementation uses feedforward neural networks that work well for the LunarLander-v3 
                environment from Gymnasium.
              </p>
              <p>
                The training process includes comprehensive visualization of training progress, including episode reward plots with moving averages, 
                episode length analysis, and loss curves for both actor and critic networks. The implementation demonstrates how PPO's clipped 
                objective prevents large policy updates, ensuring stable learning, while entropy regularization balances exploration vs exploitation.
              </p>
              <p>
                Key features include KL divergence analysis for multivariate Gaussians used in policy updates, proper handling of episode termination 
                and truncation, and normalization of advantages for stable training. The project showcases how reinforcement learning algorithms 
                can learn complex control policies through trial and error, with the agent progressively improving from negative rewards to successful 
                landings with positive rewards.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">PyTorch</span>
              <span className="project-page-tech-badge">Gymnasium</span>
              <span className="project-page-tech-badge">Reinforcement Learning</span>
              <span className="project-page-tech-badge">PPO</span>
              <span className="project-page-tech-badge">Actor-Critic</span>
              <span className="project-page-tech-badge">GAE</span>
              <span className="project-page-tech-badge">Neural Networks</span>
              <span className="project-page-tech-badge">Jupyter Notebooks</span>
              <span className="project-page-tech-badge">Matplotlib</span>
              <span className="project-page-tech-badge">NumPy</span>
              <span className="project-page-tech-badge">Box2D</span>
              <span className="project-page-tech-badge">Policy Gradient Methods</span>
              <span className="project-page-tech-badge">Deep RL</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/advanced-machine-learning/tree/main/Reinforcement_Learning-Lunar_Lander" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Plant Care Tracker Project Page
export function PlantCareTrackerPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Plant Care Tracker</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={plantCareTrackerImage} 
                alt="Plant Care Tracker PWA" 
                className="project-page-main-image plant-care-tracker-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                Plant Care Tracker is a progressive web application designed to help plant enthusiasts never forget to care for their plants. 
                The app combines AI technology, real-time weather data, and gamification to create an engaging and intelligent plant care experience. 
                Built as a collaborative project, it features a comprehensive suite of tools for managing plant collections with modern web technologies.
              </p>
              <p>
                The application leverages Google Gemini Vision API for AI-powered plant identification through camera-based photo capture. 
                Users can simply take a photo of their plant, and the app automatically detects the species and populates care information. 
                This feature provides instant care recommendations based on the identified plant type, making it easy for users to understand 
                their plants' specific needs.
              </p>
              <p>
                The smart notification system uses Firebase Cloud Functions to schedule push notifications at user-specified times, 
                delivering personalized plant care reminders via Firebase Cloud Messaging. The gamification system rewards users with XP 
                and leveling progression for completed tasks, with achievement unlocking and animated celebration dialogs to keep users engaged. 
                The comprehensive achievement system tracks plant care milestones and provides daily task completion bonuses.
              </p>
              <p>
                Intelligent care scheduling supports dynamic intervals including daily, weekly, biweekly, monthly, and custom frequencies. 
                A calendar visualization shows exact due dates for watering, fertilizing, and maintenance tasks, with a visual calendar widget 
                for easy date selection. The app integrates real-time weather data from OpenWeatherMap API, providing location-based weather 
                recommendations, 5-day forecasts for better care planning, and temperature-based watering recommendations.
              </p>
              <p>
                As a Progressive Web App, Plant Care Tracker is installable to home screens with custom app icons and splash screens. 
                It includes a service worker for offline functionality and asset caching, responsive design optimized for mobile, tablet, and desktop devices, 
                and dark mode support with theme persistence. The app demonstrates modern web development practices with Vue.js 3, Firebase services, 
                and AI integration for a complete, production-ready application.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Vue.js 3</span>
              <span className="project-page-tech-badge">Vuetify 3</span>
              <span className="project-page-tech-badge">Firebase</span>
              <span className="project-page-tech-badge">Google Gemini AI</span>
              <span className="project-page-tech-badge">Progressive Web App</span>
              <span className="project-page-tech-badge">Firestore</span>
              <span className="project-page-tech-badge">Cloud Functions</span>
              <span className="project-page-tech-badge">Firebase Cloud Messaging</span>
              <span className="project-page-tech-badge">OpenWeatherMap API</span>
              <span className="project-page-tech-badge">Vue Router</span>
              <span className="project-page-tech-badge">Vuefire</span>
              <span className="project-page-tech-badge">Vite</span>
              <span className="project-page-tech-badge">Workbox</span>
              <span className="project-page-tech-badge">Service Worker</span>
              <span className="project-page-tech-badge">Push Notifications</span>
              <span className="project-page-tech-badge">Gamification</span>
              <span className="project-page-tech-badge">AI Vision</span>
              <span className="project-page-tech-badge">Responsive Design</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://planttracker-35804.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
              style={{ marginRight: '1rem' }}
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a 
              href="https://github.com/prajwal-u2/plant-care-tracker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Travel Journal App Project Page
export function TravelJournalAppPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Travel Journal App</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-images-stacked">
              <div className="project-page-image-container">
                <img 
                  src={travelogue1Image} 
                  alt="Travel Journal App - Home Page" 
                  className="project-page-main-image travelogue-image"
                />
              </div>
              <div className="project-page-image-container travelogue-2-container">
                <img 
                  src={travelogue2Image} 
                  alt="Travel Journal App - Journal Editor" 
                  className="project-page-main-image travelogue-image travelogue-2-image"
                />
              </div>
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                Travel Journal App is a full-stack web application designed for creating and managing travel journals with AI-powered content enhancement, 
                rich text editing, and intelligent search capabilities. Built as a collaborative team project for CSCI 5117 (Fall 2025), the application 
                provides a comprehensive platform for travelers to document their journeys with rich multimedia content and AI-assisted writing improvements.
              </p>
              <p>
                The application features a custom-built rich text editor that supports up to two images per chapter, offering flexible and visually engaging 
                journal creation. Users can create multiple chapters for each travel journal, edit, reorder, and delete chapters as needed. The editor provides 
                a seamless writing experience with support for formatting, images, and structured content organization.
              </p>
              <p>
                One of the standout features is the AI-powered content enhancement system that automatically improves writing quality using OpenAI's language models 
                via Langchain integration. This feature helps users refine their travel narratives, ensuring engaging and well-written journal entries. The intelligent 
                search system enables users to find journals based on title, description, and location, making it easy to retrieve specific travel memories.
              </p>
              <p>
                The application integrates AWS S3 for efficient image storage and management, with automatic cleanup on journal deletion to optimize storage costs. 
                Authentication is handled through Auth0 using OAuth2/OIDC via Authlib Flask integration, providing secure user management. The backend is built with 
                Flask and PostgreSQL with connection pooling for efficient data management, while the frontend uses custom HTML/CSS/JavaScript with a mobile-first 
                responsive design approach.
              </p>
              <p>
                The application is fully responsive and optimized for mobile devices, providing a seamless user experience across all screen sizes. The project 
                demonstrates modern full-stack development practices, combining cloud services, AI integration, and responsive design to create a production-ready 
                travel journaling platform.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Flask</span>
              <span className="project-page-tech-badge">PostgreSQL</span>
              <span className="project-page-tech-badge">Auth0</span>
              <span className="project-page-tech-badge">AWS S3</span>
              <span className="project-page-tech-badge">OpenAI API</span>
              <span className="project-page-tech-badge">Langchain</span>
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">JavaScript</span>
              <span className="project-page-tech-badge">HTML/CSS</span>
              <span className="project-page-tech-badge">boto3</span>
              <span className="project-page-tech-badge">psycopg2</span>
              <span className="project-page-tech-badge">Rich Text Editor</span>
              <span className="project-page-tech-badge">Responsive Design</span>
              <span className="project-page-tech-badge">Render</span>
              <span className="project-page-tech-badge">Full-Stack</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://project-1-pied-piper.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
              style={{ marginRight: '1rem' }}
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a 
              href="https://github.com/prajwal-u2/travelouge-web-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Todo Web App Project Page
export function TodoWebAppPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Todo Web App</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-image-container">
              <img 
                src={todoAppImage} 
                alt="Todo Web App" 
                className="project-page-main-image todo-app-image"
              />
            </div>
            <br/>
            <div className="project-page-description-text">
              <p>
                Todo Web App is a modern, full-stack todo application built with Vue.js 3 and Firebase. The application enables users to organize 
                their tasks with category-based filtering, track completed items, and enjoy real-time synchronization across all devices. 
                Built as part of CSCI 5117 Fall 2025 coursework, it demonstrates proficiency in modern frontend frameworks, Firebase integration, 
                and responsive web design.
              </p>
              <p>
                The application features secure Google Authentication for user login, providing a seamless and secure authentication experience. 
                Users can create, edit, and delete todos with an intuitive interface. The category organization system allows users to create custom 
                categories and organize their todos efficiently. Category filtering is available on both active and completed pages, making it easy 
                to find specific tasks.
              </p>
              <p>
                The app includes protected routes with authentication guards, ensuring secure access to user data. Real-time synchronization with 
                Firebase Firestore ensures that todos are automatically updated across all devices when changes are made. The modern UI is built with 
                Tailwind CSS, providing a clean and responsive interface that works beautifully on all devices, from mobile phones to desktop computers.
              </p>
              <p>
                The navigation system features a left sidebar with links to Todos and Completed Todos pages for consistent navigation, and a right 
                sidebar that appears on Todos and Done pages for category filtering and management. Users can create custom categories, filter todos 
                by category on both active and completed pages, and delete categories when no longer needed. The application automatically redirects 
                to the todos page if a user is already logged in, and includes category validation to ensure only valid categories are accessible.
              </p>
              <p>
                Built with Vue.js 3 using the Composition API, Vue Router 4 for routing, and Vuefire for reactive Firebase bindings, the application 
                demonstrates modern Vue.js development practices. The project structure is well-organized with reusable components, clear separation 
                of concerns, and follows best practices for code quality with ESLint and Prettier integration.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Vue.js 3</span>
              <span className="project-page-tech-badge">Composition API</span>
              <span className="project-page-tech-badge">Firebase</span>
              <span className="project-page-tech-badge">Firestore</span>
              <span className="project-page-tech-badge">Google Authentication</span>
              <span className="project-page-tech-badge">Vue Router 4</span>
              <span className="project-page-tech-badge">Vuefire</span>
              <span className="project-page-tech-badge">Tailwind CSS</span>
              <span className="project-page-tech-badge">Vite</span>
              <span className="project-page-tech-badge">Real-time Sync</span>
              <span className="project-page-tech-badge">Responsive Design</span>
              <span className="project-page-tech-badge">ESLint</span>
              <span className="project-page-tech-badge">Prettier</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://todoapp-12a9c.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
              style={{ marginRight: '1rem' }}
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a 
              href="https://github.com/prajwal-u2/todo-web-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Travel Survey App Project Page
export function TravelSurveyAppPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <Navbar />
      <div className="project-page-container">
        
        <header className="project-page-header">
          <h1 className="project-page-title">Travel Survey Application</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                Travel Survey Application is a Flask-based web application designed for collecting and analyzing travel preference survey responses. 
                The application features a multi-page survey form with consent flow, SQLAlchemy database integration, RESTful API endpoints, and an 
                interactive admin dashboard with data visualization. Built as part of CSCI 5117 (Web Development) coursework at the University of Minnesota, 
                it demonstrates proficiency in full-stack web development with Python, Flask, and PostgreSQL.
              </p>
              <p>
                The survey form collects comprehensive travel preferences including demographics (name, age), travel frequency and preferences, 
                travel companions and destination types, and dream destinations. The application includes a user-friendly consent flow before 
                survey participation, ensuring users understand the purpose and use of their data. The multi-step survey provides a smooth user 
                experience with clear navigation and validation.
              </p>
              <p>
                The application uses SQLAlchemy ORM with PostgreSQL for persistent storage of survey responses. The database schema includes 
                fields for timestamp, name, age, frequency, travel type, travel companions, destination preferences, and dream destination descriptions. 
                This allows for comprehensive data collection and analysis of travel preferences.
              </p>
              <p>
                The RESTful API provides JSON endpoints for retrieving survey responses, supporting both chronological and reverse chronological 
                ordering. The admin dashboard features an interactive summary page with a response table, data visualizations using Chart.js 
                (including charts for frequency, travel types, companions, etc.), and time series analysis. The dashboard enables administrators 
                to quickly understand survey trends and patterns.
              </p>
              <p>
                The frontend is built with HTML, CSS, and JavaScript using the PureCSS framework for a clean and responsive design. The application 
                is deployed using Gunicorn as a WSGI server and is accessible via Render. The project demonstrates modern web development practices 
                including RESTful API design, database integration, and interactive data visualization.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Flask</span>
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">PostgreSQL</span>
              <span className="project-page-tech-badge">SQLAlchemy</span>
              <span className="project-page-tech-badge">RESTful API</span>
              <span className="project-page-tech-badge">Chart.js</span>
              <span className="project-page-tech-badge">PureCSS</span>
              <span className="project-page-tech-badge">JavaScript</span>
              <span className="project-page-tech-badge">Gunicorn</span>
              <span className="project-page-tech-badge">Render</span>
              <span className="project-page-tech-badge">Data Visualization</span>
              <span className="project-page-tech-badge">Web Development</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://homework-1-prajwal-u2.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
              style={{ marginRight: '1rem' }}
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a 
              href="https://github.com/prajwal-u2/travel-survey-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
} 