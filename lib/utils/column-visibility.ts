export const xsVisibility = {
    description: false,
    type: false,
    status: false,
    priority: false,
    reasoning: false,
    businessUnits: false,
    itApplications: false,
    websites: false,
    systems: false,
    products: false,
    legalFrameworks: false,
};

export const smVisibility = {
    priority: true,
    description: false,
    type: false,
    status: false,
    reasoning: false,
    businessUnits: false,
    itApplications: false,
    websites: false,
    systems: false,
    products: false,
    legalFrameworks: false,
};

export const mdVisibility = {
    status: true,
    priority: true,
    description: false,
    type: false,
    reasoning: false,
    businessUnits: false,
    itApplications: false,
    websites: false,
    systems: false,
    products: false,
    legalFrameworks: false,
};

export const lgVisibility = {
    description: false,
    type: true,
    status: true,
    priority: true,
    reasoning: true,
    businessUnits: false,
    itApplications: false,
    websites: false,
    systems: false,
    products: false,
    legalFrameworks: false,
};

export const defaultVisibility = {
    name: false,
    actions: false,
    description: false,
    type: false,
    status: false,
    priority: false,
    reasoning: false,
    businessUnits: false,
    itApplications: false,
    websites: false,
    systems: false,
    products: false,
    legalFrameworks: false,
};

export const getColumnVisibility = (width: number) => {
    const columnVisibility =
        width < 400
            ? xsVisibility
            : width < 600
            ? smVisibility
            : width < 768
            ? mdVisibility
            : lgVisibility;

    return columnVisibility;
};
