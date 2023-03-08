import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === "GET") {
    return res.status(200).json([
      {
        title: "Search",
        url: "../search/index.html",
        review_by: null,
        owner_slack: "#alerts",
      },
      {
        title: "Endpoints",
        url: "../endpoints/index.html",
        review_by: "2021-11-15",
        owner_slack: "#alerts",
      },
      {
        title: "Schemas",
        url: "../schemas/index.html",
        review_by: "2020-04-15",
        owner_slack: "#alerts",
      },
      {
        title: "How to get CSV data",
        url: "../getting-started/how-to-get-csv-data/index.html",
        review_by: "2020-04-06",
        owner_slack: "#alerts",
      },
      {
        title: "Creating advanced data set queries",
        url: "../getting-started/creating-advanced-data-set-queries/index.html",
        review_by: "2020-06-06",
        owner_slack: "#alerts",
      },
      {
        title: "Quick start",
        url: "../getting-started/quick-start/index.html",
        review_by: "2020-04-06",
        owner_slack: "#alerts",
      },
      {
        title: "Getting started",
        url: "../getting-started/index.html",
        review_by: "2020-04-06",
        owner_slack: "#alerts",
      },
      {
        title: "Support",
        url: "../support/index.html",
        review_by: "2020-04-06",
        owner_slack: "#alerts",
      },
      {
        title: "Pagination",
        url: "../overview/pagination/index.html",
        review_by: "2020-04-05",
        owner_slack: "#alerts",
      },
      {
        title: "Error handling",
        url: "../overview/error-handling/index.html",
        review_by: "2020-04-05",
        owner_slack: "#alerts",
      },
      {
        title: "OpenAPI specification",
        url: "../overview/openapi-specification/index.html",
        review_by: "2020-04-05",
        owner_slack: "#alerts",
      },
      {
        title: "Versioning",
        url: "../overview/versioning/index.html",
        review_by: "2020-04-05",
        owner_slack: "#alerts",
      },
      {
        title: "Overview",
        url: "../overview/index.html",
        review_by: "2020-04-05",
        owner_slack: "#alerts",
      },
      {
        title:
          "Accessibility statement for Technical Documentation Template and documentation",
        url: "../accessibility/index.html",
        review_by: "2020-04-06",
        owner_slack: "#alerts",
      },
      {
        title: "API documentation",
        url: "../index.html",
        review_by: "2020-10-04",
        owner_slack: "#alerts",
      },
    ]);
  }

  return res.status(405).end();
};
export default handler;