import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert.client"

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        <p>
          Describe what can be done about it here.Describe what can be done
          about it here.Describe what can be done about it here.Describe what
          can be done about it here.Describe what can be done about it here.
        </p>
      </AlertDescription>
    </Alert>
  )
}
