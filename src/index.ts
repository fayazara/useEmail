import { PlunkService } from "./services/plunk";
import { PostmarkService } from "./services/postmark";
import { ResendService } from "./services/resend";
import { SendGridService } from "./services/sendgrid";
import { MailgunService } from "./services/mailgun";
import type { EmailProvider } from "./types/email-options";
import type { EmailService } from "./types/email-service";

/**
 * Factory function to get the email service based on the provider
 * @param provider - The email provider
 * @returns The email service instance
 * @throws Error if the provider is not supported
 */
export function useEmail(provider: EmailProvider): EmailService {
  switch (provider) {
    case "resend": {
      return new ResendService();
    }
    case "plunk": {
      return new PlunkService();
    }
    case "sendgrid": {
      return new SendGridService();
    }
    case "postmark": {
      return new PostmarkService();
    }
    case "mailgun": {
      return MailgunService();
    }
    default: {
      throw new Error(`Unsupported email provider: ${provider}`);
    }
  }
}
