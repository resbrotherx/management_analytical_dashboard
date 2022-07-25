const paymentRoutes = [
    {
        icon: "grid",
        title: "Payment (Bill)",
        href: "#",
        children: [
            {
                icon: "grid",
                title: "Payments by bill type",
                href: "/bill-type",
            },
            {
                icon: "grid",
                title: "Payments by service cluster",
                href: "/service-cluster",
            }
            ,
            {
                icon: "grid",
                title: "Payments by customer category",
                href: "/customer-type",
            },
            {
                icon: "grid",
                title: "Payments by district",
                href: "/district",
            },
        ],
    },
];

const billRoutes = [
    {
        icon: "edit",
        title: "Total Billed Units",
        href: "#",
        children: [
            {
                icon: "grid",
                title: "Billed units by tariff",
                href: "/bill-tarrif",
            },
            {
                icon: "grid",
                title: "Billed units by service cluster",
                href: "/bill-cluster",
            }
            ,
            {
                icon: "grid",
                title: "Billed units by district",
                href: "/bill-district",
            },
            {
                icon: "grid",
                title: "Billed units by district",
                href: "/bill-district",
            },
        ],
    },
];

const singleRoutes = [
    {
        icon: "monitor",
        title: "Dashboard",
        href: "/",
        children: [],
    },
    {
        icon: "pie-chart",
        title: "All Charts",
        href: "/all-chart",
        children: [],
    },
];

const arrearsRoutes = [
    {
        icon: "package",
        title: "Arrears",
        href: "#",
        children: [
          {
            icon: "grid",
            title: "All arrears by district",
            href: "/arreas-district",
          },
          {
            icon: "grid",
            title: "All arrears by tariff",
            href: "/arreas-tarrif",
          }
          ,
          {
            icon: "grid",
            title: "All arrears by service clusters",
            href: "/arreas-cluster",
          },
          {
            icon: "grid",
            title: "All arrears by service clusters",
            href: "/arreas-cluster",
          },
        ],
      },
];

const customersRoutes = [
    {
        icon: "cast",
        title: "Customers",
        href: "#",
        children: [
          {
            icon: "grid",
            title: "All customers by district",
            href: "/customer-district",
          },
          {
            icon: "grid",
            title: "All customers by Tarrif",
            href: "/customer-tarrif",
          }
          ,
          {
            icon: "grid",
            title: "All customers by Feeder",
            href: "/customer-feeder",
          },
          {
            icon: "grid",
            title: "All customers by district/date",
            href: "#",
          },
        ],
      },
];

export const routes =  [
    ...singleRoutes,
    ...paymentRoutes,
    ...billRoutes,
    ...arrearsRoutes,
    ...customersRoutes,

];