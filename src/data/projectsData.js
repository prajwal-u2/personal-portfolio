export const projectsData = {
  'distributed-file-system': {
    id: 'distributed-file-system',
    title: 'Distributed File System',
    shortDescription: 'Distributed file system capable of hosting multiple clients that can share files together seamlessly using Gifford algorithm for consistency and fault tolerance.',
    detailedDescription: `This project implements a robust distributed file system that enables multiple clients to seamlessly share and access files across a network. The system is designed with fault tolerance and consistency as core principles.

    Key Features:
    • Implements the Gifford algorithm for maintaining data consistency across distributed nodes
    • Supports concurrent file operations from multiple clients with proper synchronization
    • Provides fault tolerance through data replication and node recovery mechanisms
    • Ensures data integrity even during network partitions and node failures
    • Scalable architecture that can accommodate growing numbers of clients and storage nodes

    Technical Implementation:
    • Built using Python with socket programming for network communication
    • Implements vector clocks for ordering events in the distributed system
    • Uses consensus algorithms to handle conflicting operations
    • Provides both strong and eventual consistency models based on application requirements
    • Includes comprehensive logging and monitoring for system debugging`,
    technologies: ['Python', 'Distributed Systems', 'Gifford Algorithm', 'File Systems'],
    githubUrl: 'https://github.com/prajwal-u2/distributed-file-system'
  },
  'dht-federated-ml-system': {
    id: 'dht-federated-ml-system',
    title: 'DHT Federated ML System',
    shortDescription: 'Federated machine learning system with a network of nodes capable of performing ML tasks using a decentralized peer-to-peer DHT Chord network.',
    detailedDescription: `A cutting-edge federated machine learning system that leverages a Distributed Hash Table (DHT) Chord network for decentralized model training. This system enables collaborative machine learning without centralized coordination.

    Architecture Overview:
    • Implements a peer-to-peer network using the Chord protocol for node discovery and communication
    • Each node maintains its local dataset while participating in global model training
    • Ensures privacy preservation by keeping data localized to individual nodes
    • Provides fault tolerance through DHT ring maintenance and data replication

    Machine Learning Features:
    • Supports various ML algorithms including neural networks, decision trees, and ensemble methods
    • Implements federated averaging for model parameter aggregation
    • Provides differential privacy mechanisms to protect individual node data
    • Handles heterogeneous data distributions across different nodes

    Technical Innovations:
    • Custom DHT implementation optimized for ML workloads
    • Efficient gradient compression and communication protocols
    • Dynamic node joining and leaving without disrupting training
    • Byzantine fault tolerance for handling malicious nodes`,
    technologies: ['Python', 'Federated Learning', 'DHT Chord', 'P2P Networks'],
    githubUrl: 'https://github.com/prajwal-u2/dht-federated-ml-system'
  },
  'distributed-ml-system': {
    id: 'distributed-ml-system',
    title: 'Distributed ML System',
    shortDescription: 'Distributed system of compute nodes managed by a coordinator to train and validate data for machine learning models with high performance and scalability.',
    detailedDescription: `A high-performance distributed machine learning system implemented in C++ that coordinates multiple compute nodes for parallel model training and validation. This system is designed for large-scale ML workloads requiring significant computational resources.

    System Architecture:
    • Master-worker architecture with a central coordinator managing distributed compute nodes
    • Implements data parallelism for training large datasets across multiple machines
    • Provides dynamic load balancing based on node capabilities and current workload
    • Supports both synchronous and asynchronous parameter updates

    Performance Optimizations:
    • Utilizes efficient memory management and vectorized operations
    • Implements custom communication protocols for minimal latency
    • Features gradient compression techniques to reduce network overhead
    • Supports GPU acceleration for compute-intensive operations

    Scalability Features:
    • Auto-scaling capabilities to add/remove nodes based on workload
    • Fault detection and recovery mechanisms for node failures
    • Efficient checkpointing for long-running training jobs
    • Support for heterogeneous hardware configurations

    ML Capabilities:
    • Supports deep neural networks, gradient boosting, and linear models
    • Implements various optimization algorithms (SGD, Adam, RMSprop)
    • Provides comprehensive metrics and monitoring for training progress
    • Features automated hyperparameter tuning across the distributed cluster`,
    technologies: ['C++', 'Machine Learning', 'Distributed Computing', 'Parallel Processing'],
    githubUrl: 'https://github.com/prajwal-u2/distributed-ml-system'
  },
  'utopia-kafka-project': {
    id: 'utopia-kafka-project',
    title: 'Utopia - Real-Time Analytics Pipeline',
    shortDescription: 'Real-time analytics pipeline using Apache Kafka for data ingestion and Apache Pinot for low-latency analytical queries on streaming data.',
    detailedDescription: `Utopia is a comprehensive real-time analytics pipeline designed to handle high-throughput data streams and provide instant insights through low-latency queries. The system combines the power of Apache Kafka for data ingestion with Apache Pinot for real-time analytics.

    Data Pipeline Architecture:
    • Multi-stage data ingestion using Kafka producers and consumers
    • Real-time data transformation and enrichment pipelines
    • Schema evolution support for changing data formats
    • Exactly-once processing guarantees for critical data streams

    Analytics Engine:
    • Apache Pinot cluster optimized for sub-second query response times
    • Support for complex aggregations and time-series analysis
    • Real-time dashboard integration for live data visualization
    • OLAP cube generation for multi-dimensional analysis

    Scalability and Performance:
    • Horizontal scaling capabilities for both Kafka and Pinot clusters
    • Automatic partitioning strategies for optimal data distribution
    • Memory-optimized data structures for fast query execution
    • Compression and indexing strategies for storage efficiency

    Monitoring and Operations:
    • Comprehensive metrics collection using Prometheus and Grafana
    • Automated alerting for system anomalies and performance degradation
    • Data quality monitoring and validation pipelines
    • Backup and disaster recovery procedures`,
    technologies: ['Apache Kafka', 'Apache Pinot', 'Real-Time Analytics', 'Data Pipeline'],
    githubUrl: 'https://github.com/prajwal-u2/utopia-kafka-project'
  },
  'text-summarization': {
    id: 'text-summarization',
    title: 'Text Summarization Analysis',
    shortDescription: 'Comparative analysis of text summarization algorithms—T5, BERT, and TextRank—evaluating performance across diverse datasets for both long and short summaries.',
    detailedDescription: `A comprehensive research project that conducts an in-depth comparative analysis of state-of-the-art text summarization algorithms. This study evaluates the performance, efficiency, and applicability of different approaches across various text types and domains.

    Algorithms Studied:
    • T5 (Text-to-Text Transfer Transformer): Fine-tuned for abstractive summarization tasks
    • BERT (Bidirectional Encoder Representations from Transformers): Adapted for extractive summarization
    • TextRank: Graph-based algorithm for unsupervised keyword and sentence extraction
    • Custom hybrid approaches combining multiple techniques

    Evaluation Framework:
    • ROUGE metrics (ROUGE-1, ROUGE-2, ROUGE-L) for automatic evaluation
    • Human evaluation studies for summary quality assessment
    • Performance analysis across different text lengths and domains
    • Computational efficiency comparison including training time and inference speed

    Dataset Diversity:
    • News articles from CNN/DailyMail dataset
    • Scientific papers from arXiv abstracts
    • Legal documents and contracts
    • Social media content and reviews
    • Multi-language text samples

    Research Contributions:
    • Novel evaluation metrics considering semantic similarity and coherence
    • Analysis of bias and fairness in summarization outputs
    • Recommendations for choosing appropriate algorithms based on use case
    • Open-source implementation with reproducible experiments`,
    technologies: ['Python', 'NLP', 'BERT', 'T5', 'TextRank'],
    githubUrl: 'https://github.com/prajwal-u2/text-summarization'
  },
  'software-requirement-specification': {
    id: 'software-requirement-specification',
    title: 'Software Requirement Specification',
    shortDescription: 'Software engineering academic project to prepare SRS document and delivery of code using agile development methodologies and best practices.',
    detailedDescription: `A comprehensive software engineering project that demonstrates the complete software development lifecycle from requirements gathering to final delivery. This project emphasizes best practices in software engineering and agile development methodologies.

    Project Scope:
    • Development of a complete web application following industry standards
    • Comprehensive Software Requirements Specification (SRS) documentation
    • Implementation using agile development practices with iterative releases
    • Quality assurance through automated testing and code reviews

    Agile Development Process:
    • Sprint planning and backlog management using Scrum methodology
    • User story creation and acceptance criteria definition
    • Daily standups and sprint retrospectives
    • Continuous integration and deployment (CI/CD) pipeline implementation

    Documentation Deliverables:
    • Detailed SRS document following IEEE 830 standards
    • System architecture and design documents
    • User interface mockups and wireframes
    • Test plans and quality assurance procedures
    • Project management artifacts and progress tracking

    Technical Implementation:
    • Modern web application architecture with clean code principles
    • RESTful API design and implementation
    • Database design with proper normalization
    • Security considerations and implementation
    • Performance optimization and scalability planning

    Quality Assurance:
    • Unit testing with high code coverage
    • Integration testing for system components
    • User acceptance testing with stakeholders
    • Code quality metrics and static analysis`,
    technologies: ['Python', 'Software Engineering', 'SRS Document', 'Agile Development'],
    githubUrl: 'https://github.com/prajwal-u2/software-requirement-specification'
  },
  '5g-network-field-test-evaluation': {
    id: '5g-network-field-test-evaluation',
    title: '5G Network Field Test Evaluation',
    shortDescription: 'Field testing for 5G network in Minneapolis and its evaluation, analyzing network performance, latency, and coverage patterns in real-world scenarios.',
    detailedDescription: `A comprehensive field study analyzing 5G network performance in Minneapolis, providing valuable insights into real-world 5G deployment effectiveness. This research contributes to understanding 5G network behavior in urban environments.

    Field Testing Methodology:
    • Systematic measurement campaigns across different areas of Minneapolis
    • Multiple testing scenarios including indoor, outdoor, and mobile environments
    • Different times of day and week to capture usage pattern variations
    • Multiple device types and carrier comparisons

    Performance Metrics:
    • Download and upload throughput measurements
    • Latency analysis including round-trip time and jitter
    • Signal strength and quality indicators (RSRP, RSRQ, SINR)
    • Packet loss rates and error statistics
    • Handover performance between cell towers

    Coverage Analysis:
    • Heat map generation for signal strength across the city
    • Dead zone identification and analysis
    • Building penetration loss measurements
    • Comparison with 4G LTE performance in same locations

    Data Analysis and Insights:
    • Statistical analysis of performance variations
    • Correlation between environmental factors and network performance
    • Identification of optimal 5G use cases based on measured performance
    • Recommendations for network optimization and deployment strategies

    Research Contributions:
    • Real-world performance data for academic and industry research
    • Methodology for systematic 5G network evaluation
    • Insights into urban 5G deployment challenges and opportunities`,
    technologies: ['5G', 'Computer Networks', 'Network Analysis', 'Field Testing'],
    githubUrl: 'https://github.com/prajwal-u2/5G-network-field-test-evaluation'
  },
  'mininet-sdn-implementation': {
    id: 'mininet-sdn-implementation',
    title: 'Mininet SDN Implementation',
    shortDescription: 'Implementation of Software Defined Networks using Mininet and Python. Emulated the behavior of Layer 2 and Layer 3 protocols in network topology.',
    detailedDescription: `A comprehensive Software Defined Networking (SDN) implementation using Mininet for network emulation and Python for controller development. This project demonstrates advanced networking concepts and programmable network control.

    SDN Architecture:
    • OpenFlow-based controller implementation for centralized network control
    • Custom network topologies designed for different testing scenarios
    • Separation of control plane and data plane for flexible network management
    • RESTful API for dynamic network configuration and monitoring

    Protocol Implementation:
    • Layer 2 switching with MAC address learning and forwarding
    • Layer 3 routing with custom routing algorithms and protocols
    • VLAN implementation for network segmentation
    • Quality of Service (QoS) mechanisms for traffic prioritization

    Network Emulation Features:
    • Custom Mininet topologies simulating real-world network scenarios
    • Traffic generation and analysis tools for performance testing
    • Network failure simulation and recovery mechanisms
    • Bandwidth limiting and latency injection for realistic testing

    Advanced Functionality:
    • Load balancing algorithms for traffic distribution
    • Network monitoring and statistics collection
    • Security features including access control lists (ACLs)
    • Dynamic routing table updates based on network conditions

    Educational Value:
    • Comprehensive documentation for learning SDN concepts
    • Step-by-step tutorials for network protocol implementation
    • Performance comparison between traditional and SDN approaches
    • Real-world application scenarios and use cases`,
    technologies: ['Python', 'SDN', 'Computer Networks', 'Mininet'],
    githubUrl: 'https://github.com/prajwal-u2/Mininet-SDN-Implementation'
  }
}; 