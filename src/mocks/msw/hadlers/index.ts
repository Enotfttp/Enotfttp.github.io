import { HttpHandler } from 'msw';
import { RKOHandlers } from './RKOHandlers';
import { serviceConnectsHandlers } from './ServiceConnetcsHandlers';
import { eventsHandlers } from './EventsHandlers';
import { periodsHandlers } from './PeriodsHandlers';
import { reviewHandlers } from './ReviewHandlers';

export const handlers: HttpHandler[] = [...RKOHandlers, ...serviceConnectsHandlers, ...eventsHandlers, ...periodsHandlers, ...reviewHandlers];
