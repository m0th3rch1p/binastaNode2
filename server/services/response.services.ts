export const execResponse = <T>(response: [unknown][] | null, error: unknown) => {
    if (error) {
        console.log("[-] error fetching product variations");
        return null;
    }

    return <T>response?.[0]
};