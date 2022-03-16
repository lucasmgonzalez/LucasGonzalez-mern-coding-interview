import { JsonController, Get, Put, Param, Body } from 'routing-controllers'
import { FlightsModel, FlightStatuses } from '../models/flights.model';
import { FlightsService } from '../services/flights.service'

const flightsService = new FlightsService();

interface FlightStatusUpdateBody {
    status: FlightStatuses
}

@JsonController('/flights', { transformResponse: false })
export default class FlightsController {
    @Get('')
    async getAll() {
        return {
            status: 200,
            data: await flightsService.getAll(),
        }
    }

    @Put('/:code/update-status')
    async edit(@Param('code') code: string, @Body() data: FlightStatusUpdateBody) {
        await FlightsModel.where({ code }).update({ status: data.status }).exec()

        return {
            status: 200
        }
    }
}
