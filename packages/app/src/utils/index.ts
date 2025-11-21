export const getSiteName = () => {
    // eslint-disable-next-line
    // @ts-expect-error
    return window.frappe?.boot?.sitename ?? import.meta.env.VITE_SITE_NAME;
};

export const enableSocket = () => {
    const value = import.meta.env.VITE_ENABLE_SOCKET;

    if (value == null) {
        return false;
    }

    if (typeof value === "boolean") {
        return value;
    }

    return value !== "false";
};
