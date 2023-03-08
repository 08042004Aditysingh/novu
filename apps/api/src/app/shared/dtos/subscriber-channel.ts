import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ChatProviderIdEnum, PushProviderIdEnum } from '@novu/shared';

export class ChannelCredentials {
  @ApiProperty({
    description:
      'Webhook url used by chat app integrations. The webhook should be obtained from the chat app provider.',
  })
  webhookUrl?: string;

  @ApiPropertyOptional({ description: 'Channel specification for Mattermost chat notifications' })
  channel?: string;

  @ApiPropertyOptional({
    description: 'Contains an array of the subscriber device tokens for a given provider. Used on Push integrations',
  })
  deviceTokens?: string[];
}

export class SubscriberChannel {
  @ApiProperty({
    enum: { ...ChatProviderIdEnum, ...PushProviderIdEnum },
    description: 'The provider identifier for the credentials',
  })
  providerId: ChatProviderIdEnum | PushProviderIdEnum;

  @ApiProperty({
    type: ChannelCredentials,
    description: 'Credentials payload for the specified provider',
  })
  credentials: ChannelCredentials;
}
