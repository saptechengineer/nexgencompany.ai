import Image from "next/image";
import parthaImg from "@/app/blog/_assets/images/authors/partha.png";
import nexgenblog1 from "@/app/blog/_assets/images/blogimage/1.png";
import nexgenblog2 from "@/app/blog/_assets/images/blogimage/2.png";
import nexgenblog3 from "@/app/blog/_assets/images/blogimage/3.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  feature: "feature",
  tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.feature,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "SAP Business AI",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Business AI",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "We are building all the boilerplate, plug&play business AI solutions to accelerate your Enterprise Automation and Innovation",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Get your SAP Business AI done in days.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "BTP Cloud Application",
    titleShort: "Cloud Applications",
    description:
      "We are building all the boilerplate, plug&play SAP BTP Cloud solutions to accelerate your Enterprise Automation and Innovation",
    descriptionShort:
      "Get your enterprise application in days, not weeks.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  partha: "partha",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.partha,
    // The name to display in the author's bio. Up to 60 characters.
    name: "partha goswami",
    // The job to display in the author's bio. Up to 60 characters.
    job: "CTO at NexGen Technologies (NexGenCompany.ai)",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Partha is the CTO of NexGen Technologies (NexGenCompany.ai). He is also a lead instructor at ACloudGuruji.com (techEd.ai). He has delivered several Enterpeise project within SAP scope. His specialization is Data, Cloud and AI.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: parthaImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/partha_prayukti",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/parthasap/",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "Business-AI-Document-Intelligence-Solution-NexGen-Company-AI",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "𝐒𝐡𝐢𝐩𝐩𝐞𝐝 𝐨𝐮𝐫 𝐯𝐞𝐫𝐲 𝐟𝐢𝐫𝐬𝐭 SAP Business 𝐀𝐈 𝐩𝐫𝐨𝐣𝐞𝐜𝐭!",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "The project began with strong support from well-wishers, leveraging existing relationships in the SAP ecosystem for success. The AI project aimed to automate business workflows and verify bill-of-entry PDF documents, presenting a challenge that was tackled with dedication. Over five days, a dedicated team led by a Lead Engineer, AI Engineer, Associate Engineer, and ChatGPT delivered the project. The process involved receiving requirements, crucial meetings, development, AI training, workflow implementation, testing, and a successful onsite demo. The solution was built on Microsoft Azure, utilizing OneDrive for document storage, Azure Logic Apps for workflow orchestration, Azure AI Document Intelligence for extraction, Python for algorithm implementation, and Azure PostgreSQL for SAP data storage.",    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.partha),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-04-11",
    image: {
      // The image to display in <CardArticle /> components.
      src: nexgenblog1,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "NexGen Technologies (NexGenCompany.ai)",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={nexgenblog1}
          alt="NexGenCompany.ai - Enterprise Business AI Solution"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            NexGen Technologies (NexgenCompany.ai) is specialized in Enterprise Data, Cloud Application and Business AI solution provider to many of the International SAP customers.
            Here we you can get the details how we delivered our first Business AI project in SAP domain.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>🌟 𝗛𝗼𝘄 𝘄𝗲 𝗴𝗼𝘁 𝗼𝘂𝗿 𝗳𝗶𝗿𝘀𝘁 𝗰𝗹𝗶𝗲𝗻𝘁?</h3>
          <p className={styles.p}>
          Its no secret! Our journey began with the unwavering support of well-wishers who recognized our track record of excellence in delivering Enterprise AI/ML projects. Building upon established relationships, particularly within the SAP ecosystem, we paved the way for our inaugural projects success.
          </p>

          {/* <pre className={styles.code}>
            <code>
              {`CREATE TABLE public.users (
  id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  email text NOT NULL,
  password text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT users_pkey PRIMARY KEY (id)
);`}
            </code>
          </pre> */}
        </section>

        {/* <section>
          <h3 className={styles.h3}>2. Add your credentials to ShipFast</h3>
          <p className={styles.p}>
            Copy the <span className={styles.codeInline}>API URL</span> and{" "}
            <span className={styles.codeInline}>API Key</span> from your
            Supabase project settings and add them to your ShipFast project
            settings. Add these files to your project:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>.env.local</li>
            <li className={styles.li}>.env.production</li>
          </ul>
        </section> */}

        <section>
          <h3 className={styles.h3}>💡 𝗪𝗵𝗮𝘁 𝘄𝗮𝘀 𝘁𝗵𝗲 𝗔𝗜 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗿𝗲𝗾𝘂𝗶𝗿𝗲𝗺𝗲𝗻𝘁?</h3>
          <p className={styles.p}>
          Simple yet ambitious: automate business workflows and intelligently verify bill-of-entry PDF documents. Each bill-of-entry PDF, spanning 10-30 pages and housing an average of 194 fields, presented a challenge we were eager to tackle head-on.
          </p>
        </section>  

        <section>
          <h3 className={styles.h3}>🏁 𝗛𝗼𝘄 𝗱𝗶𝗱 𝘄𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿 𝘁𝗵𝗲 𝗠𝗩𝗣 𝗶𝗻 𝗷𝘂𝘀𝘁 𝟱 𝗱𝗮𝘆𝘀?</h3>
          <p className={styles.p}>
          With a dedicated team comprising:
          <br></br>
👨‍💻 𝗟𝗲𝗮𝗱 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿: Orchestrating the project and serving as the primary liaison with the client.
<br></br>
👨‍💻 𝗔𝗜 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿: Training our intelligent document extraction system to achieve precision and accuracy.
<br></br>
👩‍💻 𝗔𝘀𝘀𝗼𝗰𝗶𝗮𝘁𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿: Crafting bespoke business algorithms and workflow designs.
<br></br>
🧠 𝗖𝗵𝗮𝘁𝗚𝗣𝗧: Providing valuable insights and suggestions throughout the project.


<br></br>
<br></br>
<br></br>
📅 𝗗𝗮𝘆𝟬: Received a high-level overview of the requirement via email.
<br></br>
📅 𝗗𝗮𝘆𝟭: A pivotal meeting with the IT Head of T**** provided invaluable insights, culminating in a 2-page functional document outlining the workflow. We swiftly finalized the tech stack and initiated development, completing an initial PoC on the same day.
<br></br>
📅 𝗗𝗮𝘆𝟮: Commenced AI training for bill-of-entry document processing, fine-tuning our model to achieve a remarkable 94% accuracy after multiple iterations.
<br></br>
📅 𝗗𝗮𝘆𝟯: Rapidly developed and implemented the workflow and business algorithms, seamlessly integrating them into our solution.
<br></br>
📅 𝗗𝗮𝘆𝟰: Rigorous testing and validation ensured a robust and reliable system.
<br></br>
📅 𝗗𝗮𝘆𝟱: Addressed final bugs and conducted an onsite demo, impressing our client with a successful demonstration and end-user testing.

          </p>
        </section>   


        <section>
        <h3 className={styles.h3}>💻𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗧𝗲𝗰𝗵 𝗦𝘁𝗮𝗰𝗸 𝘂𝘀𝗲𝗱 𝗳𝗼𝗿 𝘁𝗵𝗶𝘀 𝗽𝗿𝗼𝗷𝗲𝗰𝘁?</h3>
          <p className={styles.p}>
          Our solution was built and deployed on Microsoft Azure, leveraging cutting-edge technologies:
          <br></br>
📁 𝗢𝗻𝗲𝗗𝗿𝗶𝘃𝗲: Securely stored PDF documents for seamless access.
<br></br>
🔗 𝗔𝘇𝘂𝗿𝗲 𝗟𝗼𝗴𝗶𝗰 𝗔𝗽𝗽𝘀: Designed and orchestrated complex workflows with ease.
<br></br>
🧠 𝗔𝘇𝘂𝗿𝗲 𝗔𝗜 𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲: Trained our AI model for document extraction and provided real-time inference capabilities.
<br></br>
⚙️ 𝗔𝘇𝘂𝗿𝗲 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗔𝗽𝗽 𝘄𝗶𝘁𝗵 𝗣𝘆𝘁𝗵𝗼𝗻🐍:
Implemented business algorithms and validation logic for seamless integration.
<br></br>
🗄️𝗔𝘇𝘂𝗿𝗲 𝗣𝗼𝘀𝘁𝗴𝗿𝗲𝗦𝗤𝗟 𝗙𝗹𝗲𝘅𝗶𝗯𝗹𝗲 𝗦𝗲𝗿𝘃𝗲𝗿:
Stored and retrieved intermediate SAP data, ensuring data integrity and reliability.  

<br></br>
<br></br>


Join us as we continue to revolutionize enterprise application development, delivering quality solutions in days, not weeks. The future of AI-driven innovation starts here, with NexGen Technologies (NexGenCompany.ai). 
<br></br>
<br></br>
#AI #EnterpriseSolutions #Innovation #TechRevolution 🚀🔥
</p>
</section>

      </>
    ),
  },


  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "Business-AI-SAP-AI-Powered-Natural-Language-DB-Search-Engine-NexGen-Company-AI",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Natural Language Database Search Engine for Enterprise",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "In the rapidly evolving digital landscape, businesses are continually seeking innovative solutions to leverage their data assets effectively. At NexGen Technologies (NexGenCompanya.ai), we are proud to announce a groundbreaking milestone in business AI applications and solutions. Our latest venture, a Natural Language Database Search Engine, has set a new standard for enterprise data interaction, transforming complex data queries into a seamless conversational experience.",    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.partha),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-04-16",
    image: {
      // The image to display in <CardArticle /> components.
      src: nexgenblog2,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      // urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "NexGen Technologies (NexGenCompany.ai)",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={nexgenblog2}
          alt="NexGenCompany.ai - Enterprise Business AI Solution"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>💡 Introduction</h2>
          <p className={styles.p}>
            NexGen Technologies (NexgenCompany.ai) is specialized in Enterprise Data, Cloud Application and Business AI solution provider to many of the International SAP customers.
            Here we you can get the details of our most demanding project on AI-Powered Natural Language DB Search Engine.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>💹 Empowering Decision Making with Advanced AI</h3>
          <p className={styles.p}>
          Our journey began with a challenging yet exhilarating project requirement from a leading enterprise client. The task? To unlock the full potential of real-time SAP Sales and Procurement data housed in PostgreSQL databases. Leveraging our proprietary SDK, we seamlessly pipelined massive volumes of dynamic data, setting the stage for unparalleled query processing capabilities.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>👩‍💻 The Backbone of Innovation: Our Tech Stack</h3>
          <p className={styles.p}>
          The success of our Natural Language DB Search Engine lies in its sophisticated tech stack:
          <br></br>
          <br></br>
          🟢 Langchain Expression Language: Orchestrates the overall workflow, ensuring a fluid integration of components.
          <br></br>
          🟢 Langsmith: Offers unparalleled insights for tracking and debugging, ensuring the engine runs like a well-oiled machine.
<br></br>
🟢 PostgreSQL DB: Acts as the robust data source with over 50 tables, catering to diverse query needs.
<br></br>
🟢 Few-Short Example Learning: Enhances model accuracy, enabling the system to generate precise SQL commands from natural language inputs.
<br></br>
🟢 Dynamic Few-Shot Example Selection & Internal Langchain Techniques: Tailor examples to query context, leveraging CromaDB and semantic similarity algorithms for enhanced relevance and accuracy.
<br></br>
🟢 Dynamic Relevant Table Selection: Employs AI to intuitively select pertinent tables based on the query, boosting performance and cost-efficiency.
<br></br>
🟢 Customized Prompts & Memory: Elevates user interaction by customizing final prompts and incorporating memory for contextual follow-up queries.

          </p>
        </section>  

        <section>
          <h3 className={styles.h3}>🏁 Crafting Conversations: Our Prompt Engine Design</h3>
          <p className={styles.p}>
          Our innovative Prompt Engine design stands at the core of the Natural Language DB Search Engine, facilitating an intuitive dialogue between humans and AI. It involves:
<br></br>
🟣 Example and Few-Short Prompts: Lays the groundwork for understanding and selecting relevant data points.
<br></br>
🟣 Final Prompt Structure: Integrates system information, table data, and user input into a coherent framework, ready for processing.
<br></br>
🟣 Answer Prompt: Seamlessly translates SQL queries into comprehensible answers, bridging the gap between complex databases and strategic business insights.
          </p>
        </section>   


        <section>
        <h3 className={styles.h3}>✨ Transform Your Data Interaction Experience</h3>
          <p className={styles.p}>
          
          The impact of our Natural Language DB Search Engine is profound. It not only democratizes data access across organizational levels but also significantly enhances decision-making speed and accuracy. Our project has already begun to reshape how our clients interact with their vast data landscapes, offering a glimpse into the future of enterprise data management.
<br></br>
As we continue to refine our solutions and explore new frontiers in AI, NexGenCompany remains committed to driving business innovation. Our success story is just the beginning. We invite you to join us on this exciting journey to redefine the possibilities of AI in enterprise solutions. Together, lets unlock the potential of your data.
<br></br>
<br></br>
#AI #DataManagement #Innovation #EnterpriseSolutions #NexGenCompany #NaturalLanguageProcessing #BusinessIntelligence

<br></br>
<br></br>
Join us as we continue to revolutionize enterprise application development, delivering quality solutions in days, not weeks. The future of AI-driven innovation starts here, with NexGen Technologies (NexGenCompany.ai). 
<br></br>
<br></br>
#AI #EnterpriseSolutions #Innovation #TechRevolution 🚀🔥
</p>
</section>

      </>
    ),
  },
  
  
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "Building-an-Intelligent-Enterprise-Document-Search-Engine",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Building an Intelligent Document Search Engine for Enterprise",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "In the era of information overload, the ability to swiftly sift through vast amounts of documents to find the relevant information has become paramount for businesses. With the emergence of sophisticated language models and machine learning techniques, an intelligent document search engine is not just a possibility, it's a reality. Let's dive into the technological stack that makes such an engine not only feasible but highly efficient.",    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.partha),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-04-01",
    image: {
      // The image to display in <CardArticle /> components.
      src: nexgenblog3,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      // urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "NexGen Technologies (NexGenCompany.ai)",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={nexgenblog3}
          alt="NexGenCompany.ai - Enterprise Business AI Solution"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>💡 Introduction</h2>
          <p className={styles.p}>
          In the era of information overload, the ability to swiftly sift through vast amounts of documents to find the relevant information has become paramount for businesses. With the emergence of sophisticated language models and machine learning techniques, an intelligent document search engine is not just a possibility, its a reality. Lets dive into the technological stack that makes such an engine not only feasible but highly efficient.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>👩‍💻 The Tech Stack</h3>
          <p className={styles.p}>
          
          <br></br>
          <br></br>
          🟢 AWS S3 Bucket: A robust cloud storage solution for our documents.
          <br></br>
          🟢 Python: The programming language of choice for its versatility and rich library ecosystem.
          <br></br>
          🟢 Langchain: Our orchestrator to seamlessly connect different services.
          <br></br>
          🟢 OpenAI: To convert text into meaningful vector embeddings.
          <br></br>
          🟢 Pinecone: A vector database to index and query our document vectors.
          <br></br>
          🟢 OpenAI-GPT4: The powerhouse for generating coherent and contextually relevant responses.
          <br></br>
          🟢 Customized Prompts & Memory: Elevates user interaction by customizing final prompts and incorporating memory for contextual follow-up queries.

          </p>
        </section>  

        <section>
          <h3 className={styles.h3}>🏁 The Workflow</h3>
          <p className={styles.p}>
          Step 1: Ingesting Documents
          <br></br>
          🟣 The journey begins with the ingestion of documents stored in the AWS S3 bucket. Python, with its rich set of libraries for interacting with AWS services, is utilized to extract the documents efficiently.
          <br></br>

          Step 2: Data Chunking
          <br></br>
          🟣 Once we have our documents, we split them into smaller chunks, optimized at 1000 characters each. This size is a sweet spot that ensures enough context for our language models while keeping operations manageable.
          <br></br>

          Step 3: Embedding Generation
          <br></br>
          🟣 Enter OpenAIs Embeddings Model. Each data chunk is transformed into a high-dimensional vector representation that encapsulates the semantic meaning of the text. Langchain, our orchestrator, ensures this process is smooth and scalable.
          <br></br>

          Step 4: Vector Database Indexing
          <br></br>
          🟣 Pinecone steps in to store these vector embeddings. By creating a vector database index, we lay the foundation for fast and accurate similarity searches in the future.
          <br></br>


          Step 5: Query Embedding
          <br></br>
          🟣 When a user poses a query, we again turn to OpenAIs Embeddings Model to convert this query into its vector form. This vector will act as a beacon in the sea of document vectors.
          <br></br>


          Step 6: Similarity Search
          <br></br>
          🟣 With the query vector in hand, we perform a similarity search against our Pinecone vector database index to retrieve the most relevant documents. This is where the magic of vector search shines, as it can identify the most semantically similar documents in milliseconds.
          <br></br>


          Step 7: Document Compression
          <br></br>
          🟣 Having identified relevant documents, we then compress or extract the essential content. This focuses our search engines efforts on the most pertinent information, making the process more efficient.
          <br></br>


          Step 8: Prompt Engineering
          <br></br>
          🟣 We use sophisticated prompt engineering to combine the user query with the relevant documents. This step is crucial as it frames the information in a way thats digestible for our language model.
          <br></br>

          Step 9: The LLM Takes the Stage
          <br></br>
          🟣 OpenAI-GPT4, with its unparalleled ability to generate natural language, takes the engineered prompt and produces a final response. The quality of the prompt directly influences the relevance and accuracy of the response.
          <br></br>

          Step 10: Delivering the Answer
          <br></br>
          🟣 The LLMs response is delivered back to the user, completing the search cycle. This response isnt just a snippet from a document; its a contextual answer crafted by one of the most advanced AI language models available.
          <br></br>                                                                                                    
          
          </p>
        </section>   

        <section>
          <h2 className={styles.h2}>💡 Conclusion</h2>
          <p className={styles.p}>
          By leveraging the power of the latest AI models and a robust tech stack, businesses can now deploy intelligent document search engines that turn the herculean task of document retrieval into a streamlined and user-friendly experience. With this technology, information is not only accessible but delivered in a way that directly serves the users intent. Welcome to the future of document search — intelligent, fast, and relentlessly accurate.
          </p>
        </section>

      </>
    ),
  },    
];
