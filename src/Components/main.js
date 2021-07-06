import React from 'react'

export default function main() {
    return (
        <div className='main'>
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Upload Documents</h2>
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <div class="button">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="./logo1.jpg" alt="..." />
                </div>
            </div>
            <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div class="modal-body text-center pb-5">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">

                                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Aadhaar Verification</h2>

                                        <div class="divider-custom">
                                            <div class="divider-custom-line"></div>
                                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                            <div class="divider-custom-line"></div>
                                        </div>

                                        <img class="img-fluid rounded mb-5" src="./slide3.png" alt="..." />
                                        <form action='/App.js'>
                                        <label for="formFileMultiple" class="form-label">Please upload both side images</label>
                                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                                        <br />
                                        <button className='btn btn-primary'>Submit</button>
                                        <br />
                                        </form>
                                        

                                        <p class="mb-4"> Please submit both side of aadhaar card for the further verification . You don't have to wait for verification. After submitting the documents, you close the window. We will get back to you soon.</p>
                                        <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i class="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
