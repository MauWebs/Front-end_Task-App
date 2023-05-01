// Css //
import './styles/messages.css';

export default function Messages({ children }) {

    return (

        <h3 class="alert">{children}</h3>

    );

};