<div class="tabs product-tabs card accordion" id="tabs-product">



        <section id="checkout-personal-information-step" class="checkout-step -reachable -complete card -clickable">
            <div class="card-header js-checkout-step-header" id="heading-checkout-personal-information-step" data-toggle="collapse" data-target="#content-checkout-personal-information-step" aria-expanded="false" aria-controls="content-checkout-personal-information-step">
                <h1 class="step-title h3">
                    <i class="material-icons rtl-no-flip done text-success"></i>
                    <span class="step-number">1</span>

                    <span class="d-inline d-md-none">
                        Informations perso.
                    </span>
                    <span class="d-none d-md-inline">
                        Informations personnelles
                    </span>

                    <button class="step-edit btn btn-sm btn-primary btn-inverted float-right">
                        Modifier
                    </button>
                </h1>
            </div>
            <div id="content-checkout-personal-information-step" class="collapse" aria-labelledby="heading-checkout-personal-information-step" data-parent="#tabs-product">
                <div class="content card-body">

                    <div id="js-ps_checkout-express-button-container">
                    </div>



                    <p class="identity">
                        Connecté en tant que <a href="https://netenvie-dev4.local/identite">Idona Hooper</a>.
                    </p>
                    <p>
                        Ce n'est pas vous ? <a href="https://netenvie-dev4.local/?mylogout=">Se déconnecter</a>
                    </p>
                    <p><small>Si vous vous déconnectez maintenant, votre panier sera vidé.</small></p>

                    <div class="clearfix">
                        <form method="GET" action="https://netenvie-dev4.local/commande">
                            <button class="continue btn btn-primary btn-lg" name="controller" type="submit" value="order">
                                Continuer
                            </button>
                        </form>

                    </div>


                </div>
            </div>
        </section>



        <section id="checkout-addresses-step" class="checkout-step -current -reachable js-current-step card -clickable">
            <div class="card-header js-checkout-step-header" id="heading-checkout-addresses-step" data-toggle="collapse" data-target="#content-checkout-addresses-step" aria-expanded="true" aria-controls="content-checkout-addresses-step">
                <h1 class="step-title h3">
                    <i class="material-icons rtl-no-flip done text-success"></i>
                    <span class="step-number">2</span>

                    Adresses

                    <button class="step-edit btn btn-sm btn-primary btn-inverted float-right">
                        Modifier
                    </button>
                </h1>
            </div>
            <div id="content-checkout-addresses-step" class="collapse show" aria-labelledby="heading-checkout-addresses-step" data-parent="#tabs-product">
                <div class="content card-body">

                    <div class="js-address-form">
                        <form method="POST" action="//netenvie-dev4.local/commande?id_address=0" data-refresh-url="//netenvie-dev4.local/commande?ajax=1&amp;action=addressForm" class="needs-validation" autocomplete="false" novalidate="">

                            <p>
                                L'adresse sélectionnée sera utilisée à la fois comme adresse personnelle (pour la facturation) et comme adresse de livraison.
                            </p>

                            <div id="delivery-address" class="form-wrapper">

                                <div class="js-address-form">


                                    <div class="invalid-feedback js-invalid-feedback-browser"></div>







                                    <section class="form-fields">





                                        <input type="hidden" name="back" value="">









                                        <input type="hidden" name="token" value="447e05dc396f23873f5cad98a0f5caab">








                                        <div class="form-group">
                                            <label class="" for="f-alias_7738">
                                                Alias

                                                <small class="text-muted">(Optionnel)</small>

                                            </label>




                                            <input class="form-control" name="alias" type="text" value="" id="f-alias_7738" maxlength="32">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="required" for="f-firstname_93444">
                                                Prénom


                                            </label>




                                            <input class="form-control" name="firstname" type="text" value="Idona" id="f-firstname_93444" maxlength="255" required="" autocomplete="given-name">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                            <div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>







                                        <div class="form-group">
                                            <label class="required" for="f-lastname_31780">
                                                Nom


                                            </label>




                                            <input class="form-control" name="lastname" type="text" value="Hooper" id="f-lastname_31780" maxlength="255" required="" autocomplete="family-name">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="" for="f-company_33149">
                                                Société

                                                <small class="text-muted">(Optionnel)</small>

                                            </label>




                                            <input class="form-control" name="company" type="text" value="" id="f-company_33149" maxlength="255" autocomplete="organization">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="" for="f-vat_number_95663">
                                                Numéro de TVA

                                                <small class="text-muted">(Optionnel)</small>

                                            </label>




                                            <input class="form-control" name="vat_number" type="text" value="" id="f-vat_number_95663">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="required" for="f-address1_46656">
                                                Adresse


                                            </label>




                                            <input class="form-control" name="address1" type="text" value="" id="f-address1_46656" maxlength="128" required="" autocomplete="street-address">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="" for="f-address2_49319">
                                                Complément d'adresse

                                                <small class="text-muted">(Optionnel)</small>

                                            </label>




                                            <input class="form-control" name="address2" type="text" value="" id="f-address2_49319" maxlength="128" autocomplete="address-line2">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="required" for="f-postcode_41153">
                                                Code postal


                                            </label>




                                            <input class="form-control" name="postcode" type="text" value="" id="f-postcode_41153" maxlength="12" required="" autocomplete="postal-code">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="required" for="f-city_49027">
                                                Ville


                                            </label>




                                            <input class="form-control" name="city" type="text" value="" id="f-city_49027" maxlength="64" required="" autocomplete="address-level2">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="required" for="f-id_country_56046">
                                                Pays


                                            </label>




                                            <select class="custom-select js-country" name="id_country" id="f-id_country_56046" required="">
                                                <option value="" disabled="" selected="">-- veuillez choisir --</option>
                                                <option value="8" selected="">France</option>
                                            </select>




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>







                                        <div class="form-group">
                                            <label class="" for="f-phone_10048">
                                                Téléphone

                                                <small class="text-muted">(Optionnel)</small>

                                            </label>




                                            <input class="form-control" name="phone" type="tel" value="" id="f-phone_10048" maxlength="32">




                                            <div class="invalid-feedback js-invalid-feedback-browser"></div>



                                        </div>





                                        <input type="hidden" name="saveAddress" value="delivery">
                                        <div class="custom-control custom-checkbox">
                                            <input id="use_same_address" class="custom-control-input" name="use_same_address" type="checkbox" value="1" checked="">
                                            <label class="custom-control-label" for="use_same_address">Utiliser aussi cette adresse pour la facturation</label>
                                        </div>

                                    </section>



                                    <footer class="form-footer">
                                        <input type="hidden" name="submitAddress" value="1">


                                        <button type="submit" class="continue btn btn-primary btn-lg" name="confirm-addresses" value="1">
                                            Continuer
                                        </button>


                                    </footer>



                                </div>


                            </div></form>




                    </div>

                </div>
            </div>
        </section>



</div>