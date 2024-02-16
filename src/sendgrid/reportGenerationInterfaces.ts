
export interface Report {
    date: Date,
    topic: string,
    unit: string,
    issuesTeam: string,
    issueBackground: string,
    keyMessaging: string,
    relevantMediaCoverage: mediaCoverage[]
}

export interface mediaCoverage {
    link: string,
    title: string,
}
