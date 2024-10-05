## Getting Started

### Installation

Before running the application, you need to install the necessary dependencies. Run the following command in your project directory:

```bash
yarn
```

### Environment

To run the application, follow these commands based on your environment (development or production mode):

```bash
yarn dev       # run application in development mode (.env.development)
yarn build     # build the application for production (.env.production)
yarn start     # run application in production mode (.env.production)
```

#### Running the application

Development Mode: open http://localhost:8080 in your browser to see the result.
Production Mode: open http://localhost:3000 in your browser to see the result.

### Project structure
This project follows a well-organized directory structure for better maintainability and scalability. Below is an overview of the various directories and their purposes:

#### Project directory

```plaintext
src/
├── components/
│   ├── routes/           # components for routing and page layouts
│   └── common/           # shared components (buttons, modals, inputs)
├── constants/            # application-wide constant values (API URLs, configs, static data)
├── enums/                # typeScript enums to improve code readability and type safety
├── services/             # service layer responsible for API requests and data handling
├── utils/                # utility functions (data formatting, validation, etc.)
├── hooks/                # custom React hooks for using state and lifecycle features
├── styles/               # global and component-specific styles (CSS, SCSS, or styled-components)
├── pages/                # application’s page components, each corresponding to a route
└── types/                # typeScript interfaces or classes representing data structures
```

#### Component directory
```plaintext
# Layout component (sample)

Layout/
├── components/
│   ├── Header.tsx        # the header component of the layout
│   ├── Content.tsx       # the main content area component of the layout
│   └── Footer.tsx        # the footer component of the layout
├── controllers/
│   ├── useSidebar.tsx    # custom hook for managing sidebar state and behavior
│   └── useLayout.tsx     # custom hook for managing layout-specific logic
└── styled.ts             # styled components or styles specific to the layout
```