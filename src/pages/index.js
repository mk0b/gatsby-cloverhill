import React from "react";
import cx from "classnames";
import home from "../images/undraw_taking_notes_tjaf.svg";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-indigo-700 hover:bg-indigo-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-indigo-700 hover:text-indogo-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};

function Index({ data }) {
  const services = data.services.edges;

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <div
        className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-20 font-serif font-hairline self-start">
          <h1 className="text-3xl md:text-5xl text-indigo-700 leading-tight">
            Clover Hill Pet Care LLC
          </h1>
          <p className="text-base">
            Offering exceptional pet care services in Hillsboro, Beaverton, and Portland Oregon. Day visits, Overnights, Hiking, and Coaching.
          </p>
        </div>

        <div className="container w-3/4 sm:w-7/12 lg:w-5/12 xl:1/4 mt-10 self-start">
          <div
            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
            }}
          >
            <div className="flex-1">
              <p>
                <strong>Phone: </strong>
                774-249-8127
              </p>
              <p>
                <strong>Email: </strong>
                cloverhillpetcare@gmail.com
              </p>
            </div>
            <div className="flex-initial mt-6 sm:mt-0">
              <Link to="/contact">
                <StyledButton>Contact</StyledButton>
              </Link>
            </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Our Services
          </p>

          <div className="flex flex-wrap">
            {services.map(({ node }) => (
              <Service
                title={node.frontmatter.title}
                url={node.frontmatter.path}
                key={node.frontmatter.path}
              >
                {node.excerpt}
              </Service>
            ))}
          </div>

          <div className="self-center mt-8">
            <Link to="/services">
              <StyledButton>View all services</StyledButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Our Features
          </p>

          <div className="flex flex-wrap justify-center items-stretch -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="branding" src={branding} />
                </div>
                <p className="text-2xl w-full">Free Consultation</p>
                <p>New clients recieve an obligation free consultation.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="processing" src={processing} />
                </div>
                <p className="text-2xl w-full">Certified Accountants</p>
                <p>All members of our team are certified accountants.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={modeling} />
                </div>
                <p className="text-2xl w-full">Tax Compliance</p>
                <p>We stay up to date on the latest changes to the tax code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>        
            <section className="quotes">
                <div className="bubble">
                  <blockquote>
                    I refuse to accept the view that mankind is so tragically bound to the
                    starless midnight of racism and war that the bright daybreak of peace
                    and brotherhood can never become a reality... I believe that unarmed
                    truth and unconditional love will have the final word.
                  </blockquote>
                  <div />
                  <cite> Martin Luther King, Jr.</cite>{" "}
                </div>
                <div className="bubble">
                  <blockquote>
                    {" "}
                    Peace is not a relationship of nations. It is a condition of mind
                    brought about by a serenity of soul. Peace is not merely the absence of
                    war. It is also a state of mind. Lasting peace can come only to peaceful
                    people.
                  </blockquote>
                  <div />
                  <cite> Jawaharlal Nehru</cite>{" "}
                </div>
                <div className="bubble">
                  <blockquote>
                    {" "}
                    Forgiveness is not always easy. At times, it feels more painful than the
                    wound we suffered, to forgive the one that inflicted it. And yet, there
                    is no peace without forgiveness.
                  </blockquote>
                  <div />
                  <cite> Marianne Williamson</cite>{" "}
                </div>
                <div className="bubble">
                  <blockquote>
                    Of all our dreams today there is none more important - or so hard to
                    realise - than that of peace in the world. May we never lose our faith
                    in it or our resolve to do everything that can be done to convert it one
                    day into reality.{" "}
                  </blockquote>
                  <div />
                  <cite> Lester B. Pearson</cite>{" "}
                </div>
              </section>
              <br />
              <br />
              <br />
        </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
