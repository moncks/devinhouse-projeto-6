import { Card, CardContent } from "@material-ui/core";

export const CardContainer = ({children, ...props}) => (
    <Card {...props}>
        <CardContent>
            {children}
        </CardContent>
    </Card>
)
