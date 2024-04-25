import Router from 'koa-router'
import getHealth from './health/health'
import {getEvents, addEvent} from './car_plates/car_plates.js'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/eventget', getEvents)
router.post('/api/event/:eventId', addEvent)

export default router
