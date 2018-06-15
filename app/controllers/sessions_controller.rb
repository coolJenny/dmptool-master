class SessionsController < Devise::SessionsController
  
  def new
    redirect_to(root_path)
  end

  # Capture the user's shibboleth id if they're coming in from an IDP
  # ---------------------------------------------------------------------
  def create
    existing_user = User.find_by(email: params[:user][:email])
    if !existing_user.nil?
      
    # ------------------------------------
    # START DMPTool customization
    # Until ORCID login is supported
      #if !session['devise.shibboleth_data'].nil?
        #if u = UserIdentifier.create(identifier_scheme: IdentifierScheme.find_by(name: 'shibboleth'),
                                 #identifier: session['devise.shibboleth_data']['uid'],
                                 #user: existing_user)
          #success = _('Your account has been successfully linked to your institutional credentials. You will now be able to sign in with them.')
        #end
        #existing_user.update_attributes(shibboleth_id: session['devise.shibboleth_data'][:uid])
      #end
          
      ##Ldap Users password reset
      unless existing_user.encrypted_password.present?
        existing_user.valid_password?(params[:user][:password])
      end
    # END DMPTool customization
    # ------------------------------------

      session[:locale] = existing_user.get_locale unless existing_user.get_locale.nil?
      set_gettext_locale  #Method defined at controllers/application_controller.rb
    end
    super
    
  # ------------------------------------
  # START DMPTool customization
    #if success
      #flash[:notice] = success
    #end
  # END DMPTool customization
  # ------------------------------------

  end

  def destroy
    super
    session[:locale] = nil
    set_gettext_locale  #Method defined at controllers/application_controller.rb
  end
end
