import {Report} from "./reportGenerationInterfaces";

export const sampleData:Report = {
    date: new Date(2024,2,7),
    topic: 'UBC research partnership with WuXi AppTec',
    unit: 'VP Research and Innovation',
    issuesTeam: 'J.P. Heale, Akshay Singh, Jamie Hall, Brad Wheeler, Thandi Fletcher',
    issueBackground: 'A reporter for Reuters is asking about UBC&#39;s research partnership with WuXi AppTec. WuXi AppTec is in the news because a United States Republican\n' +
        'congressman has proposed a bill to block Chinese biotechnology companies, including WuXi App Tec, from doing business with the US government due to\n' +
        'alleged complicity with the Chinese military. Working with Brad Wheeler, J.P. Heale, Jamie Hall and Akshay Singh on a response. Response shared with Gail and\n' +
        'Robin as well. Sent response to reporter.',
    keyMessaging: 'As part of a collaboration between UBC and University of Texas at El Paso, UBC researcher Dr. Art Cherkasov applied his in silico molecular docking expertise to\n' +
        'FKBP52, a prostate cancer target of interest to the University of Texas at El Paso.\n' +
        'For this collaboration, UBC provided chemical structures of molecules that inhibited the target in computer simulations.\n' +
        'As is outlined in the reports you shared, UBC was not involved in any contracts with WuXi as part of this project. Any questions relating to this project and the\n' +
        'work with WuXi should be directed to the University of Texas at El Paso.',
    relevantMediaCoverage: [{link:'https://www.reuters.com/business/healthcare-pharmaceuticals/us-bill-poses-risk-wuxi-apptec-its-western-drugmaker-partners-2024-02-05/',title:'US bill poses risk to Wuxi AppTec and its Western drugmaker partners - Reuters'}]
}
