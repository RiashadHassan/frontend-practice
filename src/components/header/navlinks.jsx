import { useState } from "react";

function NavLinks() {
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isTemplateOpen, setIsTemplateOpen] = useState(false);

    const toggleDropdown = (name) => {
        if (name === "products") {
            setIsProductOpen((prev) => !prev);
            setIsTemplateOpen(false);
        }
        if (name === "templates") {
            setIsTemplateOpen((prev) => !prev);
            setIsProductOpen(false);
        }
    };
    const handleProductClick = () => {
        toggleDropdown("products")
    }
    const handleTemplateClick = () => {
        toggleDropdown("templates")
    }
    return <div className="nav-links">
        <div className="nav-link-item dropdown-nav-link" id="product-dropdown-toggle" onClick={handleProductClick}>Product
            <div className={`product-dropdown-menu ${isProductOpen ? "active" : ""}`}>
                <div className="dropdown-item">Time Tracking</div>
                <div className="dropdown-item">Invoicing</div>
                <div className="dropdown-item">Contracts</div>
            </div>
        </div>
        <div className="nav-link-item dropdown-nav-link" id="template-dropdown-toggle" onClick={handleTemplateClick}>Templates
            <div className={`template-dropdown-menu ${isTemplateOpen ? "active" : ""}`}>
                <div className="dropdown-item">Invoice Template</div>
                <div className="dropdown-item">Contract Template</div>
            </div>
        </div>
        <div className="nav-link-item">Pricing</div>
        <div className="nav-link-item">Reviews</div>
    </div>

}

export default NavLinks