import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
        // if you had an error logging service, you'd ideally call it here
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2>Uh oh!</h2>
                    <p>
                        This was an error with this listing. <Link to="/">Click here</Link> to go back to the home page.
                    </p>
                </div>
            )
        } return this.props.children
    }
}

export default ErrorBoundary;