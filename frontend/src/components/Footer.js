import React from 'react'

export const Footer = () => {
    return (
            <footer className="border-t-2 w-full">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm text-color-footer font-bold mb-2">
                                © 2021 by Bioscoop Focus Geraardsbergen
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
