import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import dfsImage from '../assets/images/dfs.png';
import dhtMlImage from '../assets/images/dht_ml.png';
import distributedMlImage from '../assets/images/dist_ml.png';
import utopiaImage from '../assets/images/utopia.png';
import textSummarizationImage from '../assets/images/text_summarization.png';
import softwareRequirementImage from '../assets/images/agile.jpeg';
import fiveGImage from '../assets/images/5g.png';
import mininetImage from '../assets/images/mininet.png';

import './ProjectPages.css';

// Helper function to navigate back to projects section
function BackToProjectsButton() {
  return (
    <a href="/#projects" className="project-page-back-button">
      ← Back to Portfolio
    </a>
  );
}

// Distributed File System Project Page
export function ProjectPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <BackToProjectsButton />
        
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
    </div>
  );
}

// DHT Federated ML System Project Page
export function DHTFederatedMLPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <BackToProjectsButton />
        
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
    </div>
  );
}

// Distributed ML System Project Page
export function DistributedMLPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <BackToProjectsButton />
        
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
    </div>
  );
}

// Utopia Kafka Project Page
export function UtopiaKafkaPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <BackToProjectsButton />
        
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
    </div>
  );
}

// Text Summarization Project Page
export function TextSummarizationPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <BackToProjectsButton />
        
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
    </div>
  );
}

// Software Requirement Specification Project Page
export function SoftwareRequirementPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <BackToProjectsButton />
        
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
    </div>
  );
}

// 5G Network Field Test Evaluation Project Page
export function FiveGNetworkPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <BackToProjectsButton />
        
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
    </div>
  );
}

// Mininet SDN Implementation Project Page
export function MininetSDNPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <BackToProjectsButton />
        
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
    </div>
  );
} 