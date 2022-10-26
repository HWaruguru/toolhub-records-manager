export class Task {
    toolName: string
    description: string
    url: string
    missingField: string

    /**
     *
     */
    constructor(toolName: string, description: string, url: string, missingField: string) {
        this.toolName = toolName
        this.description = description
        this.url = url
        this.missingField = missingField
    }

}
