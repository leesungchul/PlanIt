class StaticPagesController < ApplicationController
  def contact_email
    @contactform = ContactForm.new(params)
    @contactform.deliver
    head :ok
  end
end
