class ContactForm < MailForm::Base
  attribute :name, :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :phone
  attribute :message

  def headers
    puts name
    puts email
    puts phone
    puts message
    {
      :subject => "Sent from my contact form",
      :to => "leesungchul@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end

end